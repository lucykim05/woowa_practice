import Car from './Car.js';

class Game {
  constructor(names) {
    this.cars = [];
    this.makeCars(names);
  }

  play(count) {
    for (let i = 0; i < count; i++) {
      this.cars.forEach((x) => x.car.move());
    }
  }

  makeCars(names) {
    names.forEach((x) => {
      const car = new Car(x);
      this.cars.push({ name: x, car: car });
    });
  }

  getResult() {
    const position = this.cars.map((x) => x.car.position);
    const max = Math.max(...position);
    const winner = this.cars
      .filter((x) => x.car.position === max)
      .map((x) => x.name);
    return { info: this.cars, winner: winner };
  }
}

export default Game;
