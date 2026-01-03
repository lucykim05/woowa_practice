import { InputController } from "./inputController.js";
import { BridgeGame } from "../BridgeGame.js";

export const bridgeController = async () => {
  const bridgeSize = await InputController.bridgeSize();
  const bridgeGame = new BridgeGame(bridgeSize);
};
