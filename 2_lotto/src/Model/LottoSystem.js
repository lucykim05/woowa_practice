import { Random } from "@woowacourse/mission-utils";
import { LOTTO } from "../constants.js";
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
}

export const lottoSystem = new LottoSystem();
