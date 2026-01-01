import Car from '../Model/Car.js';
import OutputView from '../View/OutputView.js';

class GameController {
  #names;
  #count;

  constructor(names, count) {
    this.cars = names.map((x) => new Car(x));
    this.count = count;
  }

  play() {
    const count = this.count;
    for (let i = 0; i < count; i++) {
      this.#round();
    }
    const winner = this.#getWinner();
    OutputView.printWinner(winner);
  }

  #round() {
    OutputView.printNothing();
    this.cars.forEach((x) => {
      x.move();
    });
  }

  #getWinner() {
    const max = Math.max(...this.cars.map((x) => x.position));
    const winner = this.cars
      .filter((x) => x.position === max)
      .map((x) => x.name);
    return winner;
  }

  getCars() {
    return this.cars;
  }
}

export default GameController;
