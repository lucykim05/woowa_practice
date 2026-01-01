import { OutputView } from "../View/OutputView.js";
import { InputView } from "../View/InputView.js";
import { Validator } from "../Model/validators/Validator.js";

import { OUTPUT_MSG } from "../constants.js";

export const bridgeGameController = async () => {
  OutputView.printMsg(OUTPUT_MSG.START_GAME);
  const bridgeSize = await getBridgeSize();
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
