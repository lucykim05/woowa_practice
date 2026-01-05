import { Console } from "@woowacourse/mission-utils";
import { DEFAULT_MSG } from "../constants.js";
import { commaParser } from "../Utils/parser.js";
export const InputView = {
  async coach() {
    const input = await Console.readLineAsync(DEFAULT_MSG.COACH_LIST);
    return commaParser(input);
  },
  async cantEat() {},
};
