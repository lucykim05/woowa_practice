import Lotto from './Lotto.js';
import { Random } from '@woowacourse/mission-utils';

const LottoMaker = {
  makeLotto() {
    const randomArr = Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(randomArr.sort((a, b) => a - b));
    return lotto;
  },
};

export default LottoMaker;
