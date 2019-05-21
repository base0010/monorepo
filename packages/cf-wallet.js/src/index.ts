import { JsonApiNodeProvider } from "@counterfactual/node-provider";

import { Provider } from "./provider";
import * as types from "./types";
import * as utils from "./utils";

const cfWallet = {
  Provider,
  types,
  utils
};

export { Provider, types, utils };

export { JsonApiNodeProvider };
export default cfWallet;
