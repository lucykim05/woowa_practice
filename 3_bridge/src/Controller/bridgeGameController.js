import { OutputView } from "../View/OutputView.js";
import { InputView } from "../View/InputView.js";

import { Validator } from "../Model/validators/Validator.js";
import { BridgeGame } from "../Model/BridgeGame.js";

import { OUTPUT_MSG } from "../constants.js";

export const bridgeGameController = async () => {
  OutputView.printMsg(OUTPUT_MSG.START_GAME);
  const bridgeSize = await getBridgeSize();

  const bridgeGame = new BridgeGame(bridgeSize);
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

const move = async () => {
  const rawInput = await InputView.readMoving();
  Validator.move(rawInput);
};
