import Car from './Car.js';

class Game {
  constructor(names) {
    this.makeCars(names);
    this.cars = [];
  }

  play(count) {
    for (let i = 0; i < count; i++) {
      this.cars.forEach((x) => x.car.move());
    }
  }

  makeCars(names) {
    names.forEach((x) => {
      const car = new Car(x);
      this.cars.push[{ name: x, car: car }];
    });
  }
}

export default Game;
