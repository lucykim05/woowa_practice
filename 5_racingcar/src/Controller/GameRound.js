import { MissionUtils } from '@woowacourse/mission-utils';

class GameRound {
  #number;
  constructor(cars) {
    this.#pickRandom();
    this.cars = cars;
  }

  #pickRandom() {
    const num = MissionUtils.Random.pickNumberInRange(0, 9);
    this.number = num;
  }
}

export default GameRound;
