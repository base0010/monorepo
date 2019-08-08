import { Node } from "@counterfactual/types";
import { jsonRpcMethod } from "rpc-server";

import {
  convertCoinTransfersToCoinTransfersMap,
  deserializeFreeBalanceState,
  FreeBalanceStateJSON
} from "../../../models/free-balance";
import { RequestHandler } from "../../../request-handler";
import { NodeController } from "../../controller";
import { NO_FREE_BALANCE_EXISTS } from "../../errors";
import { normalizeTokenAddress } from "../../../utils";

export default class GetFreeBalanceController extends NodeController {
  public static readonly methodName = Node.MethodName.GET_FREE_BALANCE_STATE;

  @jsonRpcMethod(Node.RpcMethodName.GET_FREE_BALANCE_STATE)
  public executeMethod = super.executeMethod;

  protected async executeMethodImplementation(
    requestHandler: RequestHandler,
    params: Node.GetFreeBalanceStateParams
  ): Promise<Node.GetFreeBalanceStateResult> {
    const { store } = requestHandler;
    const { multisigAddress, tokenAddress: tokenAddressParam } = params;

    // NOTE: We default to ETH in case of undefined tokenAddress param
    const tokenAddress = normalizeTokenAddress(tokenAddressParam)

    if (!multisigAddress) {
      throw new Error(
        "getFreeBalanceState method was given undefined multisigAddress"
      );
    }

    const stateChannel = await store.getStateChannel(multisigAddress);

    const freeBalanceState = deserializeFreeBalanceState(stateChannel
      .freeBalance.state as FreeBalanceStateJSON);

    if (!freeBalanceState.balancesIndexedByToken[tokenAddress]) {
      throw new Error(NO_FREE_BALANCE_EXISTS(tokenAddress));
    }

    return convertCoinTransfersToCoinTransfersMap(
      freeBalanceState.balancesIndexedByToken[tokenAddress]
    );
  }
}
