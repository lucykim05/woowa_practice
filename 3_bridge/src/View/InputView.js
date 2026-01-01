import { Console } from "@woowacourse/mission-utils";
import { INPUT_MSG } from "../constants.js";
export const InputView = {
  async readBridgeSize() {
    return await Console.readLineAsync(INPUT_MSG.BRIDGE_SIZE);
  },

  async readMoving() {
    return await Console.readLineAsync(INPUT_MSG.MOVE);
  },

  async readGameCommand() {
    return await Console.readLineAsync(INPUT_MSG.ROUND_OVER);
  },
};
