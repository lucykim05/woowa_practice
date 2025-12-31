import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';
import GameRound from './GameRound.js';
import OutputView from '../View/OutputView.js';

class GameController {
  constructor() {
    this.answerNumber = 0;
    this.tryCount = 0;
  }

  async play() {
    const answerNumber = this.#setAnswer();
    await this.#playGame(answerNumber);
    const count = this.getTryCount();
    OutputView.printGameResult(count);
  }

  async #playGame(answerNumber) {
    const gameRound = new GameRound(answerNumber);
    while (true) {
      const result = await gameRound.playRound(answerNumber);
      this.tryCount++;
      if (result === '3스트라이크') {
        break;
      }
    }
  }

  #setAnswer() {
    const arr = [];
    while (arr.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!arr.includes(number)) {
        arr.push(number);
      }
    }
    const answerNumber = arr.join('');
    console.log(answerNumber);
    Validator.validateNumber(answerNumber);
    this.#saveAnswerNumber(Number(answerNumber));
    return Number(answerNumber);
  }

  #saveAnswerNumber(input) {
    this.answerNumber = input;
  }

  getAnswerNumber() {
    return this.answerNumber;
  }

  getTryCount() {
    return this.tryCount;
  }
}

export default GameController;
