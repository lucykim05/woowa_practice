import { canMove } from '../utils/UtilFunction.js';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const bool = canMove();
    if (bool) this.position++;
  }
}

export default Car;
