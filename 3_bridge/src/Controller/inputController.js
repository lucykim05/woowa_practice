import { InputView } from "../View/InputView.js";
import { Validator } from "../Model/Validator.js";
import { OutputView } from "../View/OutputView.js";

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
