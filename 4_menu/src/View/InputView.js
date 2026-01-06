import { Console } from "@woowacourse/mission-utils";
import { DEFAULT_MSG } from "../constants.js";
export const InputView = {
  async coach() {
    return await Console.readLineAsync(DEFAULT_MSG.COACH_LIST);
  },
  async cantEat(coach) {
    return await Console.readLineAsync(`\n${coach}${DEFAULT_MSG.CANT_EAT}`);
  },
};
