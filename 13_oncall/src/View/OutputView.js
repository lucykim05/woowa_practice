import { Console } from "@woowacourse/mission-utils";

export const OutputView = {
  error(error) {
    Console.print(error.message);
  },

  reuslt(result) {
    result.forEach((scedule) => {
      Console.print(scedule);
    });
  },
};
