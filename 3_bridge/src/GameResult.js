class GameResult {
  #up;
  #down;

  constructor() {
    this.#setArr();
  }

  calculate(position, bridge) {
    for (let i = 0; i < position; i++) {
      this.#getRight(bridge[i]);
    }
    if (position !== length) this.#getOpposite(ridge[position]);
  }

  #setArr() {
    this.#up = [];
    this.#down = [];
  }

  #getRight(input) {
    if (input === 'D') this.#downside();
    if (input === 'U') this.#upside();
  }

  #getOpposite(input) {
    if (input === 'D') this.#upside();
    if (input === 'U') this.#downside();
  }

  #upside() {
    this.#up.push(1);
    this.#down.push(0);
  }

  #downside() {
    this.#up.push(0);
    this.#down.push(1);
  }

  getUpSide() {
    return this.#up;
  }

  getDownSide() {
    return this.#down;
  }
}

export default GameResult;
