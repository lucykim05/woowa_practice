import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MSG } from "../constants.js";
export const OutputView = {
  printMsg(msg) {
    Console.print(msg);
  },
  printMap(process) {
    Console.print(process[0]);
    Console.print(process[1]);
    Console.print("");
  },
  printResult(process, isFinish, trial) {
    Console.print(OUTPUT_MSG.RESULT_DEFAULT);
    this.printMap(process);
    Console.print(`${OUTPUT_MSG.IS_SUCCESS}${isFinish}`);
    Console.print(`${OUTPUT_MSG.TRIAL}${trial}`);
  },
};
