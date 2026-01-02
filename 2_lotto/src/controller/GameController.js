import AmountValidator from '../model/validators/AmountValidator.js';
import WinningValidator from '../model/validators/WinningValidator.js';
import BonusValidator from '../model/validators/BonusValidator.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import LottoIssuer from '../model/LottoIssuer.js';
import LottoResult from '../model/LottoResult.js';

class GameController {
  async run() {
    const input = new InputView();
    const output = new OutputView();
    const amount = await this.#getAmount(input);
    const lottos = this.#issueLottos(amount);
    this.#printLottos(lottos, output);
    const winning = await this.#getNumbers(input);
    this.#getResult(lottos, winning);
  }

  async #getAmount(input) {
    const amount = Number(await input.readAmount());
    new AmountValidator(amount);
    return amount / 1000;
  }

  async #getNumbers(input) {
    const arr = await input.readWinningNumbers();
    const winningNumbers = arr.map(Number);
    new WinningValidator(winningNumbers);
    const bonusNumber = Number(await input.readBonusNumber());
    new BonusValidator(bonusNumber, winningNumbers);
    return [winningNumbers, bonusNumber];
  }

  #issueLottos(amount) {
    const lottoIssuer = new LottoIssuer(amount);
    return lottoIssuer.issue();
  }

  #printLottos(lottos, output) {
    const msg = '[' + lottos.map((x) => x.join(', ')).join(']\n[') + ']';
    output.printLottos(msg);
  }

  #getResult(lottos, winning) {
    const [winningNumbers, bonusNumber] = winning;
    const result = new LottoResult(lottos, winningNumbers, bonusNumber);
  }
}

export default GameController;
