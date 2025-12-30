import Lotto from "../Lotto.js";
import { Random } from "@woowacourse/mission-utils";
export class LottoGame {
  #lottoNumbers;
  #winningNumbers;
  #bonusNumber;

  constructor(count) {
    this.#lottoNumbers = [];
    this.#winningNumbers = [];
    this.#bonusNumber = 0;

    this.#makeLotto(count);
  }

  #makeLotto(count) {
    for (let i = 0; i < count; i++) {
      const randNumArr = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(randNumArr);
      this.#lottoNumbers.push(lotto);
    }
  }
}
