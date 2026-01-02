import InputView from '../view/InputView.js';

class GameController {
  async run() {
    const input = new InputView();
    const amount = await input.readAmount();
    const winningNumbers = await input.readWinningNumbers();
    const bonusNumber = await input.readBonusNumber();
    return [amount, winningNumbers, bonusNumber];
  }
}

export default GameController;
