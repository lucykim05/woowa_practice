import LottoMaker from './LottoMaker.js';
import LottoResult from './LottoResult.js';

class LottoGame {
  constructor(amount) {
    this.amount = amount;
    this.lottos = [];
    this.makeMap();
  }

  makeMap() {
    const map = new Map();
    this.map = map.set(1, 0).set(2, 0).set(3, 0).set(4, 0).set(5, 0);
  }

  makeLotto() {
    for (let i = 0; i < this.amount / 1000; i++) {
      const lotto = LottoMaker.makeLotto();
      this.lottos.push(lotto);
    }
    return this.lottos;
  }

  runGame(input) {
    const [winning, bonus] = input;
    const resultMaker = new LottoResult(winning, bonus);
    this.lottos.forEach((x) => {
      const rank = resultMaker.getResult(x);
      this.result.set(rank, this.result.get(rank) + 1);
    });
  }
}

export default LottoGame;
