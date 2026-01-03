import { InputView } from "../InputView.js";

export const inputController = {
  async bridgeSize() {
    while (true) {
      try {
        const bridgeSize = await InputView.readBridgeSize();
      } catch (error) {}
    }
  },
  async move() {},
  async retry() {},
};
