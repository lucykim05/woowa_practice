import { Console } from "@woowacourse/mission-utils";
import { INPUT_MSG, OUTPUT_MSG } from "../constants.js";
export const OutputView = {
  startMsg() {
    Console.print(INPUT_MSG.START);
  },

  error(error) {
    Console.print(error.message);
  },

  showResultMsg() {
    Console.print(OUTPUT_MSG.DAYS);
  },

  result(list) {
    const msg = list.join(OUTPUT_MSG.DELIMITER);
    Console.print(`${OUTPUT_MSG.START}${msg}${OUTPUT_MSG.END}`);
  },

  endingMsg() {
    Console.print(OUTPUT_MSG.OVER);
  },
};
