import { Console } from "@woowacourse/mission-utils";
import { DEFAULT_MSG } from "../constants.js";

export const OutputView = {
  printStartMsg() {
    Console.print(DEFAULT_MSG.START);
  },

  printMap(msg) {
    Console.print(msg);
  },

  printResult(msg) {
    Console.print(msg);
  },
};
