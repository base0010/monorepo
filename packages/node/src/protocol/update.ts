import { NetworkContext } from "@counterfactual/types";

import { SetStateCommitment } from "../ethereum";
import { ProtocolExecutionFlow } from "../machine";
import { Opcode, Protocol } from "../machine/enums";
import {
  Context,
  ProtocolMessage,
  ProtocolParameters,
  UpdateParams
} from "../machine/types";
import { xkeyKthAddress } from "../machine/xkeys";
import { StateChannel } from "../models/state-channel";

import { UNASSIGNED_SEQ_NO } from "./utils/signature-forwarder";
import { assertIsValidSignature } from "./utils/signature-validator";

/**
 * @description This exchange is described at the following URL:
 *
 * specs.counterfactual.com/07-update-protocol#messages
 *
 */
export const UPDATE_PROTOCOL: ProtocolExecutionFlow = {
  0: async function*(context: Context) {
    const { responderXpub } = context.message.params!;

    const [
      appIdentityHash,
      setStateCommitment,
      appSeqNo
    ] = proposeStateTransition(context.message.params!, context);

    const mySig = yield [Opcode.OP_SIGN, setStateCommitment, appSeqNo];

    const {
      customData: { signature: theirSig }
    } = yield [
      Opcode.IO_SEND_AND_WAIT,
      {
        protocol: Protocol.Update,
        processID: context.message.processID,
        params: context.message.params,
        toXpub: responderXpub,
        customData: {
          signature: mySig
        },
        seq: 1
      } as ProtocolMessage
    ];

    assertIsValidSignature(
      xkeyKthAddress(responderXpub, appSeqNo),
      setStateCommitment,
      theirSig
    );

    const finalCommitment = setStateCommitment.getSignedTransaction([
      mySig,
      theirSig
    ]);
    yield [
      Opcode.WRITE_COMMITMENT,
      Protocol.Update,
      finalCommitment,
      appIdentityHash
    ];
  },

  1: async function*(context: Context) {
    const [
      appIdentityHash,
      setStateCommitment,
      appSeqNo
    ] = proposeStateTransition(context.message.params!, context);

    const { initiatorXpub } = context.message.params!;

    const theirSig = context.message.customData.signature;

    assertIsValidSignature(
      xkeyKthAddress(initiatorXpub, appSeqNo),
      setStateCommitment,
      theirSig
    );

    const mySig = yield [Opcode.OP_SIGN, setStateCommitment, appSeqNo];

    const finalCommitment = setStateCommitment.getSignedTransaction([
      mySig,
      theirSig
    ]);
    yield [
      Opcode.WRITE_COMMITMENT,
      Protocol.Update,
      finalCommitment,
      appIdentityHash
    ];

    yield [
      Opcode.IO_SEND,
      {
        protocol: Protocol.Update,
        processID: context.message.processID,
        toXpub: initiatorXpub,
        customData: {
          signature: mySig
        },
        seq: UNASSIGNED_SEQ_NO
      } as ProtocolMessage
    ];
  }
};

function proposeStateTransition(
  params: ProtocolParameters,
  context: Context
): [string, SetStateCommitment, number] {
  const { appIdentityHash, newState, multisigAddress } = params as UpdateParams;
  const newStateChannel = context.stateChannelsMap
    .get(multisigAddress)!
    .setState(appIdentityHash, newState);
  context.stateChannelsMap.set(
    newStateChannel.multisigAddress,
    newStateChannel
  );
  const setStateCommitment = constructUpdateOp(
    context.network,
    newStateChannel,
    appIdentityHash
  );
  const appSeqNo = context.stateChannelsMap
    .get(multisigAddress)!
    .getAppInstance(appIdentityHash).appSeqNo;

  return [appIdentityHash, setStateCommitment, appSeqNo];
}

function constructUpdateOp(
  network: NetworkContext,
  stateChannel: StateChannel,
  appIdentityHash: string
) {
  const app = stateChannel.getAppInstance(appIdentityHash);

  return new SetStateCommitment(
    network,
    app.identity,
    app.hashOfLatestState,
    app.versionNumber,
    app.timeout
  );
}
