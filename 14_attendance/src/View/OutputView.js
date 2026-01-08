import { Console } from "@woowacourse/mission-utils";
export const OutputView = {
  start(msg) {
    Console.print(msg);
  },
  error(error) {
    Console.print(error);
  },
  progress() {},
  result() {},
};
