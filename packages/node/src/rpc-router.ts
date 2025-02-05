import {
  Controller,
  JsonRpcResponse,
  jsonRpcSerializeAsResponse,
  Router,
  Rpc
} from "rpc-server";

import { RequestHandler } from "./request-handler";

type AsyncCallback = (...args: any) => Promise<any>;

export default class RpcRouter extends Router {
  private readonly requestHandler: RequestHandler;

  constructor({
    controllers,
    requestHandler
  }: {
    controllers: (typeof Controller)[];
    requestHandler: RequestHandler;
  }) {
    super({ controllers });

    this.requestHandler = requestHandler;
  }

  async dispatch(rpc: Rpc): Promise<JsonRpcResponse> {
    const controller = Object.values(Controller.rpcMethods).find(
      mapping => mapping.method === rpc.methodName
    );

    if (!controller) {
      throw Error(`Cannot execute ${rpc.methodName}: no controller`);
    }

    try {
      const result = jsonRpcSerializeAsResponse(
        {
          result: await new controller.type()[controller.callback](
            this.requestHandler,
            rpc.parameters
          ),
          type: rpc.methodName
        },
        rpc.id as number
      );

      this.requestHandler.outgoing.emit(rpc.methodName, result);

      return result;
    } catch (e) {
      console.error(e.stack);
      throw Error(e);
    }
  }

  async subscribe(event: string, callback: AsyncCallback) {
    this.requestHandler.outgoing.on(event, callback);
  }

  async subscribeOnce(event: string, callback: AsyncCallback) {
    this.requestHandler.outgoing.once(event, callback);
  }

  async unsubscribe(event: string, callback?: AsyncCallback) {
    this.requestHandler.outgoing.off(event, callback);
  }

  async emit(event: string, data: any, emitter = "incoming") {
    let eventData = data;

    if (!eventData["jsonrpc"]) {
      // It's a legacy message. Reformat it to JSONRPC.
      eventData = jsonRpcSerializeAsResponse(eventData, Date.now());
    }

    this.requestHandler[emitter].emit(event, eventData.result);
  }

  eventListenerCount(event: string): number {
    return this.requestHandler.outgoing.listenerCount(event);
  }
}
