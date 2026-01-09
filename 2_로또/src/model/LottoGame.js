import LottoMaker from './LottoMaker.js';

class LottoGame {
  constructor(amount) {
    this.amount = amount;
    this.result = new Map();
    this.lottos = [];
  }

  makeLotto() {
    for (let i = 0; i < this.amount / 1000; i++) {
      const lotto = LottoMaker.makeLotto();
      this.lottos.push(lotto);
    }
    return this.lottos;
  }
}

export default LottoGame;
