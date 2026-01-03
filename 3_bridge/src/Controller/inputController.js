import { InputView } from "../View/InputView.js";
import { Validator } from "../Model/Validator.js";

export const InputController = {
  async bridgeSize() {
    try {
      const bridgeSize = await InputView.readBridgeSize();
      Validator.bridgeLength(bridgeSize);
      return bridgeSize;
    } catch (error) {
      throw Error(error.message);
    }
  },
  async move() {},
  async retry() {},
};
