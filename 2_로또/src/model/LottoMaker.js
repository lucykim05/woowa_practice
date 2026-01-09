import Lotto from './Lotto.js';

class LottoMaker {
  static getLottos() {
    const randomArr = Random.pickNumbersInRange(1, 45, 6);
    const lotto = new Lotto(randomArr);
    return lotto;
  }
}

export default LottoMaker;
