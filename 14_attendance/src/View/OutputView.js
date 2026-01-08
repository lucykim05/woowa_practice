import { Console } from "@woowacourse/mission-utils";
import { DEFAULT } from "../constants.js";
export const OutputView = {
  start(msg) {
    Console.print(msg);
    Console.print(DEFAULT.START);
  },
  progress() {},
  result() {},
};
