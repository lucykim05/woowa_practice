import { MissionUtils } from '@woowacourse/mission-utils';
import Coin from '../Coin.js';

class OuputView {
  printCoin(map) {
    MissionUtils.Console.print('\n자판기가 보유한 동전');
    this.printCoinResult(Coin.COIN_500, map);
    this.printCoinResult(Coin.COIN_100, map);
    this.printCoinResult(Coin.COIN_50, map);
    this.printCoinResult(Coin.COIN_10, map);
  }

  printCoinResult(coin, map) {
    MissionUtils.Console.print(`${coin}원 - ${map.get(coin)}개`);
  }

  printUserAmount(amount) {
    MissionUtils.Console.print(`\n투입 금액: ${amount}원`);
  }

  printRemain(map) {
    MissionUtils.Console.print('잔돈');
    if (map.get(Coin.COIN_500) >= 1) this.printRemainResult(Coin.COIN_500, map);
    if (map.get(Coin.COIN_100) >= 1) this.printRemainResult(Coin.COIN_100, map);
    if (map.get(Coin.COIN_50) >= 1) this.printRemainResult(Coin.COIN_50, map);
    if (map.get(Coin.COIN_10) >= 1) this.printRemainResult(Coin.COIN_10, map);
  }

  printRemainResult(coin, map) {
    MissionUtils.Console.print(`${coin}원 - ${map.get(coin)}개`);
  }
}

export default OuputView;
