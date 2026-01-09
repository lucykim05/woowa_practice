import { Random } from '@woowacourse/mission-utils';
import { NUMBERS } from '../constants/constants.js';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const bool = this.canMove();
    if (bool) this.position++;
  }

  canMove() {
    const randomNum = Random.pickNumberInRange(
      NUMBERS.RANDOM_START,
      NUMBERS.RANDOM_END
    );
    if (randomNum >= NUMBERS.MOVE_NUMBER) return true;
    return false;
  }
}

export default Car;
