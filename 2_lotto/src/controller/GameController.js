import AmountValidator from '../model/validators/AmountValidator.js';
import WinningValidator from '../model/validators/WinningValidator.js';
import BonusValidator from '../model/validators/BonusValidator.js';
import InputView from '../view/InputView.js';
import LottoIssuer from '../model/LottoIssuer.js';

class GameController {
  async run() {
    const input = new InputView();
    // const amount = await this.getAmount(input);

    // const lottos = this.issueLottos(amount);
    // console.log(lottos);
    await this.getNumbers(input);
  }

  async getAmount(input) {
    const amount = Number(await input.readAmount());
    new AmountValidator(amount);
    return amount / 1000;
  }

  async getNumbers(input) {
    const arr = await input.readWinningNumbers();
    const winningNumbers = arr.map(Number);
    new WinningValidator(winningNumbers);
    const bonusNumber = Number(await input.readBonusNumber());
    new BonusValidator(bonusNumber, winningNumbers);
    return [winningNumbers, bonusNumber];
  }

  issueLottos(amount) {
    const lottoIssuer = new LottoIssuer(amount);

    return lottoIssuer.issue();
  }
}

export default GameController;
