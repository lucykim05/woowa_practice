class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move(input) {
    if (input >= 4) this.position++;
  }
}

export default Car;
