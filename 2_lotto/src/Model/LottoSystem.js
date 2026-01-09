import { Random } from "@woowacourse/mission-utils";
import { DEFAULT, LOTTO } from "../constants.js";
import Lotto from "../Lotto.js";

export class LottoSystem {
  #lottoList;
  constructor() {
    this.#lottoList = [];
  }

  #calculateProfit() {
    const buyPrice = this.#lottoList.length * LOTTO.PRICE;
    let prize = 0;

    for (const match in result) {
      const count = result[match];
      prize += count * LOTTO.MATCH[match].PRIZE;
    }
    return Number((prize / buyPrice) * 100).toFixed(1);
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

  match(winningNum, bonusNum) {
    for (const numbers of this.#lottoList) {
      const [matchCount, isBonusMatch] = numbers.match(winningNum, bonusNum);
      if (matchCount === LOTTO.MATCH.THREE.COUNT) result.THREE++;
      if (matchCount === LOTTO.MATCH.FOUR.COUNT) result.FOUR++;
      if (matchCount === LOTTO.MATCH.FIVE.COUNT) result.FIVE++;
      if (matchCount === LOTTO.MATCH.FIVE_BONUS.COUNT && isBonusMatch)
        result.FIVE_BONUS++;
      if (matchCount === LOTTO.MATCH.SIX.COUNT) result.SIX++;
    }
  }

  getResult() {
    const profitRate = this.#calculateProfit();
    const resultMsg = [DEFAULT.RESULT];

    for (const match in result) {
      resultMsg.push(`${LOTTO.MATCH[match].MSG}${result[match]}개`);
    }
    resultMsg.push(`${DEFAULT.PROFIT.START}${profitRate}${DEFAULT.PROFIT.END}`);

    return resultMsg;
  }
}

export const lottoSystem = new LottoSystem();

const result = {
  THREE: 0,
  FOUR: 0,
  FIVE: 0,
  FIVE_BONUS: 0,
  SIX: 0,
};
