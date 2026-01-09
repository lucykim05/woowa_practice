import Validator from '../model/Validator.js';
import InputView from '../view/InputView.js';
import Game from '../model/Game.js';
import OutputView from '../view/OutputView.js';

class GameController {
  async run() {
    const names = await this.readNames();
    const count = await this.readCount();
    const game = new Game(names);
    this.game = game;
    this.game.play(count);
  }

  printResult() {
    const result = this.game.getResult();
    const carsInfo = result.info;
    const winnerInfo = result.winner;
    carsInfo.forEach((x) => OutputView.printCarResult(x));
    OutputView.printWinner(winnerInfo);
  }

  async readNames() {
    const names = InputView.readNames();
    Validator.validateNames(names);
    return names;
  }

  async readCount() {
    const count = InputView.readCount();
    Validator.validateCount(count);
    return count;
  }
}

export default GameController;
