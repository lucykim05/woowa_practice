import { Console } from "@woowacourse/mission-utils";
import { DEFAULT } from "../constants.js";
export const InputView = {
  async option() {
    return await Console.readLineAsync(DEFAULT.START);
  },
};
