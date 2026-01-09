import { Console } from "@woowacourse/mission-utils";
import { DEFAULT } from "../constants.js";
export const InputView = {
  async buy() {
    return await Console.readLineAsync(DEFAULT.PRICE);
  },
  async winning() {
    return await Console.readLineAsync(DEFAULT.WINNING);
  },
  async bonus() {
    return await Console.readLineAsync(DEFAULT.BONUS);
  },
};
