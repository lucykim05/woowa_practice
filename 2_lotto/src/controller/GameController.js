import InputView from '../view/InputView.js';

class GameController {
  async run() {
    const input = new InputView();
    await this.getAmount(input);
    const winningNumbers = await input.readWinningNumbers();
    const bonusNumber = await input.readBonusNumber();
    return [amount, winningNumbers, bonusNumber];
  }

  async getAmount(input) {
    const amount = await input.readAmount();
  }
}

export default GameController;
