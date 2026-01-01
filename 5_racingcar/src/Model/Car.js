import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const num = this.#getRandom();
    if (num >= 4) this.position++;
  }

  #getRandom() {
    const num = MissionUtils.Random.pickNumberInRange(0, 9);
    return num;
  }
}

export default Car;
