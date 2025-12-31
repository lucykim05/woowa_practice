import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';
import GameRound from './GameRound.js';
import Output from '../View/OutputView.js';

class GameController {
  constructor() {
    this.answerNumber = 0;
    this.tryCount = 0;
  }

  async play() {
    const answerNumber = this.#setAnswer();
    await this.#playGame(answerNumber);
    const count = this.getTryCount();
    Output.printGameResult(count);
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
    const arr = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    const answerNumber = Number(arr.join(''));
    Validator.validateNumber(answerNumber);
    this.#saveAnswerNumber(answerNumber);
    return answerNumber;
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
