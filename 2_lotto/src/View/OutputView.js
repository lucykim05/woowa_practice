import { Console } from "@woowacourse/mission-utils";

export const OutputView = {
  random(msg) {
    for (const row of msg) {
      Console.print(row);
    }
  },
  result(result) {
    for (const line of result) {
      Console.print(line);
    }
  },
};
