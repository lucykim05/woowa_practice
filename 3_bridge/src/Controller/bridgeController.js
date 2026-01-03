import { InputController } from "./inputController.js";
import { BridgeGame } from "../BridgeGame.js";
import { OutputView } from "../View/OutputView.js";

export const bridgeController = async () => {
  const bridgeSize = await InputController.bridgeSize();
  const bridgeGame = new BridgeGame(bridgeSize);
  const result = await gameProcess(bridgeGame);
  //게임 종료 로직
  const reusltMsg = bridgeGame.makeResultMsg();
  OutputView.printResult(reusltMsg);
};

const gameProcess = async (bridgeGame) => {
  while (true) {
    if (bridgeGame.isFinish()) return true;

    const userMove = await InputController.move();
    const canMove = bridgeGame.canMove(userMove);
    if (canMove) {
      moveSucceedProcess(bridgeGame, userMove);
      continue;
    }
  }
};

const moveSucceedProcess = (bridgeGame, userMove) => {
  bridgeGame.move(userMove);
};
