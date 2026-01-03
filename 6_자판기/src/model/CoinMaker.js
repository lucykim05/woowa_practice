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
    const map = this.#makeCoinMap();
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
    this.#updateAmount(this.#coinMap, Coin.COIN_500);
    this.#updateAmount(this.#coinMap, Coin.COIN_100);
    this.#updateAmount(this.#coinMap, Coin.COIN_50);
    this.#coinMap.set(Coin.COIN_10, this.#amount / Coin.COIN_10);
  }

  #updateAmount(map, coin) {
    const remain = Math.floor(this.#amount / coin);
    const randomNum = MissionUtils.Random.pickNumberInRange(0, remain);
    map.set(coin, randomNum);
    this.#amount = this.#amount - coin * randomNum;
  }

  getCoinMap() {
    return this.#coinMap;
  }
}

export default CoinMaker;
