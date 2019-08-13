import { Node } from "@counterfactual/types";
import { jsonRpcMethod } from "rpc-server";

import { CONVENTION_FOR_ETH_TOKEN_ADDRESS } from "../../../constants";
import { RequestHandler } from "../../../request-handler";
import { NodeController } from "../../controller";
import { NO_FREE_BALANCE_EXISTS } from "../../errors";

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
    const tokenAddress = tokenAddressParam || CONVENTION_FOR_ETH_TOKEN_ADDRESS;

    if (!multisigAddress) {
      throw new Error(
        "getFreeBalanceState method was given undefined multisigAddress"
      );
    }

    const stateChannel = await store.getStateChannel(multisigAddress);

    const ret = stateChannel
      .getFreeBalanceClass()
      .withTokenAddress(tokenAddress);

    if (!ret) {
      throw new Error(NO_FREE_BALANCE_EXISTS(tokenAddress));
    }

    return ret;
  }
}
