import { InputView } from "../InputView.js";
import { Validator } from "../Model/Validator.js";
import { OutputView } from "../OutputView.js";

export const InputController = {
  async bridgeSize() {
    while (true) {
      try {
        const bridgeSize = await InputView.readBridgeSize();
        Validator.bridgeLength(bridgeSize);
        return bridgeSize;
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
  },
  async move() {},
  async retry() {},
};
