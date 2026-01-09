import LottoGame from '../model/LottoGame.js';
import Validator from '../model/Validator.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class GameController {
  async initGame() {
    try {
      const amount = await this.readAmount();
      const game = new LottoGame(amount);
      this.game = game;
    } catch (error) {
      throw error;
    }
  }

  makeLotto() {
    const lottos = this.game.makeLotto();
    OutputView.printAmount(lottos.length);
    lottos.forEach((x) => {
      OutputView.printLotto(x.getNumbers());
    });
  }

  async runGame() {
    const numbers = await this.readNumbers();
    this.game.runGame(numbers);
  }

  printResult() {
    const [result, profit] = this.game.getResult();
    OutputView.printResult(result);
    OutputView.printProfit(profit);
  }

  async readAmount() {
    try {
      const input = await InputView.readAmount();
      Validator.validateAmount(input);
      return input;
    } catch (error) {
      OutputView.printError(error.message);
      throw error;
    }
  }

  async readNumbers() {
    const winning = await InputView.readWinningNumbers();
    Validator.validateRandomNumbers(winning);
    const bonus = await InputView.readBonusNumber();
    Validator.validateBonusNumber(bonus, winning);
    return [winning, bonus];
  }
}

export default GameController;
