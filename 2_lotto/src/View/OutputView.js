import { Console } from "@woowacourse/mission-utils";

export const OutputView = {
  random(msg) {
    for (const row of msg) {
      Console.print(row);
    }
  },
  error(error) {
    Console.print(`${error.message}`);
  },
  result(result) {
    for (const line of result) {
      Console.print(line);
    }
  },
};
