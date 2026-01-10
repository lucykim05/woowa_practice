import { Console } from "@woowacourse/mission-utils";
export const InputView = {
  async option() {
    return await Console.readLineAsync();
  },
};
