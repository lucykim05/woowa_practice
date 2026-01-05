import { MissionUtils } from '@woowacourse/mission-utils';
import Coin from '../Coin.js';

class CoinMaker {
  #amount;
  #coinMap;

  constructor(amount) {
    this.#amount = amount;
    this.#makeCoin();
  }

  #makeCoin() {
    this.#makeCoinMap();
    this.#updateMap();
  }

  #makeCoinMap() {
    const map = new Map();
    map
      .set(Coin.COIN_500, 0)
      .set(Coin.COIN_100, 0)
      .set(Coin.COIN_50, 0)
      .set(Coin.COIN_10, 0);
    this.#coinMap = map;
    return map;
  }

  #updateMap() {
    const coins = [Coin.COIN_500, Coin.COIN_100, Coin.COIN_50, Coin.COIN_10];
    while (this.#amount >= 10) {
      const available = coins.filter((x) => x <= this.#amount);
      const coin = MissionUtils.Random.pickNumberInList(available);
      this.#coinMap.set(coin, this.#coinMap.get(coin) + 1);
      this.#amount -= coin;
    }
  }

  getCoinMap() {
    return this.#coinMap;
  }
}

export default CoinMaker;
