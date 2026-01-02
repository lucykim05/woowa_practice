import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';

class LottoIssuer {
  #amount;

  constructor(amount) {
    this.amount = amount;
  }

  issue(amount) {
    const lottos = [];
    for (let i = 0; i < amount; i++) {
      const numbers = this.#getRandomNum();
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
    }
    return lottos;
  }

  #getRandomNum() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }
}

export default LottoIssuer;
