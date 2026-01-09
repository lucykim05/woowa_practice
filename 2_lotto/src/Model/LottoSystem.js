import { Random } from "@woowacourse/mission-utils";
import { DEFAULT, LOTTO } from "../constants.js";
import Lotto from "../Lotto.js";

export class LottoSystem {
  #lottoList;
  constructor() {
    this.#lottoList = [];
  }

  makeLotto(price) {
    const count = price / LOTTO.PRICE;
    for (let i = 0; i < count; i++) {
      const randomNumArr = Random.pickUniqueNumbersInRange(
        LOTTO.RANGE.MIN,
        LOTTO.RANGE.MAX,
        LOTTO.COUNT
      );
      const sortedNumArr = randomNumArr.sort((a, b) => a - b);
      const lotto = new Lotto(sortedNumArr);
      this.#lottoList.push(lotto);
    }
  }
  randResult() {
    const msg = [`\n${this.#lottoList.length}${DEFAULT.RANDOM}`];

    for (const numbers of this.#lottoList) {
      msg.push(numbers.getNumberMsg());
    }
    return msg;
  }
}

export const lottoSystem = new LottoSystem();
