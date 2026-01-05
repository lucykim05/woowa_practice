import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../View/OutputView.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const num = this.#getRandom();
    if (num >= 4) this.position++;
    this.#printResult();
  }

  #getRandom() {
    const num = MissionUtils.Random.pickNumberInRange(0, 9);
    return num;
  }

  #printResult() {
    const name = this.name;
    const num = this.position;
    OutputView.printResult(name, num);
  }

  resetPosition() {
    this.position = 0;
  }
}

export default Car;
