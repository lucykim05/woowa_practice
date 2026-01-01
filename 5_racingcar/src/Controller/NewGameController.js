import Car from '../Model/Car.js';

class NewGameController {
  constructor(username, names, count) {
    this.username = new Car(username);
    this.cars = names.map((x) => new Car(x));
    this.count = count;
    this.tryCount = 0;
  }

  play() {
    const count = this.count;
    while (true) {
      for (let i = 0; i < count; i++) {
        this.#round();
      }
      this.tryCount++;
      if (this.#checkWinner() === 1) break;
    }
    return this.tryCount;
  }

  #round() {
    this.username.move();
    this.cars.forEach((x) => x.move());
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
