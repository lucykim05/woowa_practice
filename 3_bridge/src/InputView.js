import { Console } from "@woowacourse/mission-utils";
import { DEFAULT_MSG } from "./constants.js";

export const InputView = {
  async readBridgeSize() {
    return await Console.readLineAsync(DEFAULT_MSG.START);
  },

  readMoving() {},

  readGameCommand() {},
};
