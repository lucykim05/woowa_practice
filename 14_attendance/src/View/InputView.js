import { Console } from "@woowacourse/mission-utils";
import { DEFAULT } from "../constants.js";

export const InputView = {
  async option() {
    return await Console.readLineAsync(DEFAULT.START);
  },

  async name() {
    return await Console.readLineAsync(DEFAULT.NAME);
  },

  async time() {
    return await Console.readLineAsync(DEFAULT.TIME);
  },
};
