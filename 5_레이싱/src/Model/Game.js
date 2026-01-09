import Car from './Car.js';

class Game {
  constructor(names) {
    this.makeCars(names);
    this.cars = new Map();
  }

  makeCars(names) {
    names.forEach((x) => {
      const car = new Car(x);
      this.cars.set(x, car);
    });
  }
}

export default Game;
