import InputView from '../View/InputView.js';

class GameRound {
  constructor(answerNumber) {
    this.userNumber = 0;
    this.answerNumber = answerNumber;
  }

  async playRound() {
    const userNumber = await this.getUserNumber();
    const result = this.getResult(userNumber);
    return result;
  }

  getResult(input) {
    if (input === 123) {
      return '3스트라이크';
    }
    return '1스트라이크';
  }

  async getUserNumber() {
    const input = new InputView();
    const num = await input.readInput();
    this.#saveUserNumber(num);
    return num;
  }

  #saveUserNumber(num) {
    this.userNumber = num;
  }

  getStatus() {
    return this.bool;
  }
}

export default GameRound;
