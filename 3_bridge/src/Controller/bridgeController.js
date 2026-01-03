import { InputController } from "./inputController.js";
import { BridgeGame } from "../BridgeGame.js";

export const bridgeController = async () => {
  const bridgeSize = await InputController.bridgeSize();
  const bridgeGame = new BridgeGame(bridgeSize);
  const result = gameProcess(bridgeGame);
};

const gameProcess = async (bridgeGame) => {
  while (true) {
    const userMove = await InputController.move();
  }
};
