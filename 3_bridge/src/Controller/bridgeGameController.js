import { OutputView } from "../View/OutputView.js";
import { InputView } from "../View/InputView.js";

import { Validator } from "../Model/validators/Validator.js";
import { BridgeGame } from "../Model/BridgeGame.js";

import { OUTPUT_MSG, TRIAL } from "../constants.js";

export const bridgeGameController = async () => {
  OutputView.printMsg(OUTPUT_MSG.START_GAME);
  const bridgeSize = await getBridgeSize();
  const bridgeGame = new BridgeGame(bridgeSize);
  while (true) {
    const isWin = await gameProcess(bridgeGame); //true ; 다리 건너기 성공, false ; 실패
    if (isWin) {
      gameOver(bridgeGame);
      return;
    }
    const retry = await getTrialOver();
    if (!retry) {
      gameOver(bridgeGame);
      return;
    }
    initializeProcess(bridgeGame);
  }
};

const gameProcess = async (bridgeGame) => {
  while (true) {
    const move = await getMove();
    const isMoveOk = bridgeGame.move(move);
    checkProcess(bridgeGame);
    if (!isMoveOk) return false;

    const isSuccess = bridgeGame.isSuccess();
    if (isMoveOk && isSuccess) return true;
  }
};

const checkProcess = (bridgeGame) => {
  const process = bridgeGame.getProcessMsg();
  OutputView.printMap(process);
  return;
};

const getTrialOver = async () => {
  const isTrialOver = await getTrialOverAnswer();
  if (isTrialOver === TRIAL.RETRY) return true;
  return false;
};

const initializeProcess = (bridgeGame) => {
  bridgeGame.retry();
};

const gameOver = (bridgeGame) => {
  const [process, isFinish, trial] = bridgeGame.getResult();
  OutputView.printResult(process, isFinish, trial);
};

const getTrialOverAnswer = async () => {
  while (true) {
    try {
      const rawInput = await InputView.readGameCommand();
      Validator.trialOver(rawInput);
      return rawInput;
    } catch (error) {
      OutputView.printMsg(error.message);
    }
  }
};

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
