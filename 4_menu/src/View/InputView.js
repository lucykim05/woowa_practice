import { Console } from "@woowacourse/mission-utils";
import { INPUT_MSG } from "../constants.js";
import { parseWithComma } from "../Utils/parser.js";
export const InputView = {
  async coachList() {
    const input = await Console.readLineAsync(INPUT_MSG.COACH);
    return parseWithComma(input);
  },

  async dontEat(coach) {
    const input = await Console.readLineAsync(`${coach}${INPUT_MSG.DONT_EAT}`);
    return parseWithComma(input);
  },
};
