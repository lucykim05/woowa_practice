import { Console } from "@woowacourse/mission-utils";
import { DEFAULT_MSG } from "../constants.js";

export const OutPutView = {
  start() {
    Console.print(DEFAULT_MSG.START);
  },

  error(error) {
    Console.print(error.message);
  },

  result() {},
};
