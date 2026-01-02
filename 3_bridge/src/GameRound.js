class GameRound {
  #bridge;
  #position;
  #userBridge;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#position = 0;
    this.#setBridge;
  }

  round(input, length) {
    this.#setBridge(length);
  }

  move(input) {
    const position = this.#position;
    const bridge = this.#bridge;
    const answer = bridge[position];
    return this.#checkAnswer(input, answer);
  }

  #checkAnswer(input, answer) {
    if (answer === input) {
      this.#position++;
      return true;
    }
    return false;
  }

  #setBridge(input) {
    const arr = Array.from({ length: input }, () => 0);
    this.#userBridge = arr;
  }

  getPosition() {
    return this.#position;
  }
}

export default GameRound;
