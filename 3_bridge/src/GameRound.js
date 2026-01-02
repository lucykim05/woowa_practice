class GameRound {
  #bridge;
  #position;
  #length;

  constructor(bridge, length) {
    this.#bridge = bridge;
    this.#position = 0;
    this.#length = length;
  }

  move(input) {
    const position = this.#position;
    const bridge = this.#bridge;
    const answer = bridge[position];
    console.log(answer);
    return this.#checkAnswer(input, answer);
  }

  #checkAnswer(input, answer) {
    if (answer === input) {
      this.#position++;
      return true;
    }
    return false;
  }

  getPosition() {
    return this.#position;
  }

  getAnswer() {
    return this.#bridge;
  }
}

export default GameRound;
