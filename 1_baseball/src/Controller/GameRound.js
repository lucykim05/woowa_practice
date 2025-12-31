import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import Calculator from './Calculator.js';

class GameRound {
  constructor(answerNumber) {
    this.userNumber = 0;
    this.answerNumber = answerNumber;
  }

  async playRound() {
    const answerNumber = this.answerNumber;
    const userNumber = await this.#getUserNumber();
    const result = this.#getResult(userNumber, answerNumber);
    OutputView.printRoundResult(result);
    return result;
  }

  #getResult(userNumber, answerNumber) {
    const result = Calculator.calculate(userNumber, answerNumber);
    return result;
  }

  async #getUserNumber() {
    const num = await InputView.readInput();
    this.#saveUserNumber(num);
    return num;
  }

  #saveUserNumber(num) {
    this.userNumber = num;
  }
}

export default GameRound;
