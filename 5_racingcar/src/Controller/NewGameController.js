import Car from '../Model/Car.js';
import OutputView from '../View/OutputView.js';

class NewGameController {
  #useername;
  #names;
  #count;

  constructor(username, names, count) {
    this.username = new Car(username);
    this.cars = names.map((x) => new Car(x));
    this.count = count;
    this.tryCount = 1;
  }

  play() {
    const count = this.count;
    while (true) {
      OutputView.printNothing();
      OutputView.printRound(this.tryCount);
      this.#reset();
      for (let i = 0; i < count; i++) {
        OutputView.printNothing();
        this.#round();
      }
      this.tryCount++;
      if (this.#checkWinner() === 1) break;
    }
    OutputView.printNewResult(this.tryCount - 1);
  }

  #round() {
    this.username.move();
    this.cars.forEach((x) => x.move());
  }

  #reset() {
    this.username.resetPosition();
    this.cars.forEach((x) => x.resetPosition());
  }

  #checkWinner() {
    const max = Math.max(...this.cars.map((x) => x.position));
    if (this.username.position === max) {
      return 1;
    }
    return 0;
  }
}

export default NewGameController;
