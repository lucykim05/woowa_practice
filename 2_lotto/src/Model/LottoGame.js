import Lotto from "../Lotto.js";
import { Random } from "@woowacourse/mission-utils";
export class LottoGame {
  lottoNumbers;
  #lottoInstances;
  #winningNumbers;
  #bonusNumber;

  constructor(count) {
    this.lottoNumbers = [];
    this.#lottoInstances = [];
    this.#winningNumbers = [];
    this.#bonusNumber = 0;

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

  getLottoNumbers() {
    return this.lottoNumbers;
  }
}
