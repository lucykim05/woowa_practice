import AmountValidator from '../model/validators/AmountValidator.js';
import WinningValidator from '../model/validators/WinningValidator.js';
import BonusValidator from '../model/validators/BonusValidator.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import LottoIssuer from '../model/LottoIssuer.js';
import LottoResult from '../model/LottoResult.js';
import { PRIZE } from '../constants/Message.js';

class GameController {
  async run() {
    try {
      const input = new InputView();
      const output = new OutputView();
      const amount = await this.#getAmount(input);
      const lottos = this.#issueLottos(amount);
      this.#printLottos(amount, lottos, output);
      const winning = await this.#getNumbers(input);
      this.#printResult(lottos, winning, amount, output);
    } catch (error) {
      console.error(error);
    }
  }

  async #getAmount(input) {
    try {
      const amount = Number(await input.readAmount());
      console.log(amount);
      new AmountValidator(amount);
      return amount / 1000;
    } catch (error) {
      console.error(error);
    }
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

  #printLottos(amount, lottos, output) {
    output.printAmount(amount);
    output.printLottos(lottos);
  }

  #printResult(lottos, winning, amount, output) {
    const [winningNumbers, bonusNumber] = winning;
    const lottoResult = new LottoResult(
      lottos,
      winningNumbers,
      bonusNumber,
      amount
    );
    const resultMap = lottoResult.getResult();
    const profit = lottoResult.getProfit();
    output.printResult(resultMap);
    output.printProfit(profit);
  }
}

export default GameController;
