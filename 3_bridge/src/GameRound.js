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
    while (this.#position !== length) {
      const isAnswer = this.move(input);
      if (!isAnswer) break;
    }
    return this.#userBridge;
  }

  move(input) {
    const position = this.#position;
    const bridge = this.#bridge;
    const answer = bridge[position];
    this.#updateBridge(input, position);
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

  #updateBridge(input, position) {
    const bridge = this.#userBridge;
    bridge[position] = input;
  }

  getPosition() {
    return this.#position;
  }

  getAnswer() {
    return this.#bridge;
  }
}

export default GameRound;
