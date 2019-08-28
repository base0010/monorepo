pragma solidity 0.5.11;
pragma experimental "ABIEncoderV2";

/* solium-disable-next-line */
import "@counterfactual/cf-adjudicator-contracts/contracts/interfaces/CounterfactualApp.sol";
/* solium-disable-next-line */
import "@counterfactual/cf-funding-protocol-contracts/contracts/libs/LibOutcome.sol";


//Stubbing out some FP Game logic
contract FOAMParty is CounterfactualApp {



  enum ActionType{
    CAPTURE_TOTEM,
    LOGIN,
    CLAIM_PARTYBOX,
    DEPLOY_TOTEM
  }

  enum Stage{
    PRE_GAME,
    LOBBY_START,
    GAME_START,
    GAME_END,
    POST_GAME

  }

  enum Teams{
    RED,
    GREEN
  }

  struct AppState {
    Stage stage;
    bytes32 salt;
    bytes32 commitHash;
    uint256 versionNumber;
  }
}
