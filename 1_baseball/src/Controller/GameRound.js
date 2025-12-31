import InputView from '../View/InputView.js';
import Output from '../View/OutputView.js';

class GameRound {
  constructor(answerNumber) {
    this.userNumber = 0;
    this.answerNumber = answerNumber;
  }

  async playRound() {
    const userNumber = await this.#getUserNumber();
    const result = this.#getResult(userNumber);
    Output.printRoundResult(result);
    return result;
  }

  #getResult(input) {
    //calculator
  }

  async #getUserNumber() {
    const input = new InputView();
    const num = await input.readInput();
    this.#saveUserNumber(num);
    return num;
  }

  #saveUserNumber(num) {
    this.userNumber = num;
  }
}

export default GameRound;
