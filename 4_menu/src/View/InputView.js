import { Console } from "@woowacourse/mission-utils";
import { DEFAULT_MSG } from "../constants.js";
export const InputView = {
  async coach() {
    return await Console.readLineAsync(DEFAULT_MSG.COACH_LIST);
  },
  async cantEat() {},
};
