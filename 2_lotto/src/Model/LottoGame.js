import Lotto from "../Lotto.js";
import { Random } from "@woowacourse/mission-utils";
export class LottoGame {
  lottoNumbers;
  winningNumbers;
  bonusNumber;
  #lottoInstances;
  #matchResults;

  constructor(count) {
    this.lottoNumbers = [];
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
  }
}
