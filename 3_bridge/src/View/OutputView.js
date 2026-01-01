import { Console } from "@woowacourse/mission-utils";
export const OutputView = {
  printMsg(msg) {
    Console.print(msg);
  },
  printMap(process) {
    Console.print(process[0]);
    Console.print(process[1]);
    Console.print("");
  },
  printResult() {},
};
