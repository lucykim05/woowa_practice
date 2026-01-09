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

  getResult() {
    const position = this.cars.map((x) => x.position);
    const max = Math.max(...position);
    const winner = this.cars
      .filter((x) => x.position === max)
      .map((x) => x.name);
    return { info: this.cars, winner: winner };
  }
}

export default Game;
