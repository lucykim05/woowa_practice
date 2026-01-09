import LottoGame from '../model/LottoGame.js';
import Validator from '../model/Validator.js';
import InputView from '../view/InputView.js';

class GameController {
  async initGame() {
    const amount = await this.readAmount();
    const game = new LottoGame(amount);
    this.game = game;
  }

  async readAmount() {
    const input = await InputView.readAmount();
    Validator.validateAmount(input);
    return input;
  }

  async readNumbers() {
    const winning = await InputView.readWinningNumbers();
    Validator.validateWinningNumbers(winning);
    const bonus = await InputView.readBonusNumber();
    Validator.validateBonusNumber(bonus);
    return [winning, bonus];
  }
}

export default GameController;
