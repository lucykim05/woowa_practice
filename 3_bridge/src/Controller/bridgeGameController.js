import { OutputView } from "../View/OutputView.js";
import { InputView } from "../View/InputView.js";

import { Validator } from "../Model/validators/Validator.js";
import { BridgeGame } from "../Model/BridgeGame.js";

import { OUTPUT_MSG } from "../constants.js";

export const bridgeGameController = async () => {
  OutputView.printMsg(OUTPUT_MSG.START_GAME);
  const bridgeSize = await getBridgeSize();

  const bridgeGame = new BridgeGame(bridgeSize);
  const isWin = await gameProcess(bridgeGame); //true ; 다리 건너기 성공, false ; 실패

  if (isWin) {
  }
  trialOver();
};

const gameProcess = async (bridgeGame) => {
  while (true) {
    const move = await getMove();
    const isMoveOk = bridgeGame.move(move);
    const isSuccess = bridgeGame.isSuccess();
    if (!isMoveOk) return false;

    if (isMoveOk) {
      checkProcess(bridgeGame);
    }

    if (isSuccess) return true;
  }
};

const checkProcess = (bridgeGame) => {
  const process = bridgeGame.getProcessMsg();
  OutputView.printMap(process);
  return;
};

const trialOver = () => {};

const getBridgeSize = async () => {
  while (true) {
    try {
      const rawInput = await InputView.readBridgeSize();
      Validator.bridgeSize(rawInput);
      return Number(rawInput);
    } catch (error) {
      OutputView.printMsg(error.message);
    }
  }
};

const getMove = async () => {
  while (true) {
    try {
      const rawInput = await InputView.readMoving();
      Validator.move(rawInput);
      return rawInput;
    } catch (error) {
      OutputView.printMsg(error.message);
    }
  }
};
