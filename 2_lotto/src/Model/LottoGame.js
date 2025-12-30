import Lotto from "../Lotto.js";
import { Random } from "@woowacourse/mission-utils";
import { LOTTO_PRICE, MATCHING_PRICE, RESULT } from "../constants.js";
export class LottoGame {
  lottoNumbers;
  winningNumbers;
  bonusNumber;
  #purchaseAmout;
  #lottoInstances;
  #matchResults;
  #profitRate;

  constructor(count) {
    this.lottoNumbers = [];
    this.#purchaseAmout = count * LOTTO_PRICE;
    this.#lottoInstances = [];
    this.#matchResults = Array.from({ length: 5 }, () => 0);

    this.#makeLotto(count);
  }

  #makeLotto(count) {
    for (let i = 0; i < count; i++) {
      const randNumArr = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedrandumNum = randNumArr.sort((a, b) => a - b);
      const lotto = new Lotto(sortedrandumNum);
      this.lottoNumbers.push(sortedrandumNum);
      this.#lottoInstances.push(lotto);
    }
  }

  #calculateProfit() {
    let totalPrice = 0;
    this.#matchResults.forEach((count, idx) => {
      totalPrice += count * MATCHING_PRICE[idx];
    });

    this.#profitRate = ((totalPrice / this.#purchaseAmout) * 100).toFixed(1);
  }

  saveWinningNumbers(numbers) {
    this.winningNumbers = numbers;
  }

  saveBonusNumber(number) {
    this.bonusNumber = number;
  }

  getLottoNumbers() {
    return this.lottoNumbers;
  }

  getWinningNumbers() {
    return this.winningNumbers;
  }

  calculateResult() {
    this.#lottoInstances.forEach((lottoInstance) => {
      const matchIndex = lottoInstance.calculateMatch(
        this.winningNumbers,
        this.bonusNumber
      );
      this.#matchResults[matchIndex]++;
    });

    this.#calculateProfit();
  }

  getLottoStats() {
    let resultMsg = RESULT.DEFAULT;
    this.#matchResults.forEach((result, idx) => {
      resultMsg += `\n${RESULT.MSG[idx]}${result}개`;
    });

    resultMsg += `\n총 수익률은 ${this.#profitRate}%입니다.`;
    return resultMsg;
  }
}
