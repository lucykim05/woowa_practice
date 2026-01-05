import AmountValidator from '../model/validators/AmountValidator.js';
import WinningValidator from '../model/validators/WinningValidator.js';
import BonusValidator from '../model/validators/BonusValidator.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import LottoIssuer from '../model/LottoIssuer.js';
import LottoResult from '../model/LottoResult.js';

class GameController {
  async run() {
    try {
      //금액 입력
      const input = new InputView();
      const amount = await this.#getAmount(input);

      //로또 발행
      const lottos = this.#issueLottos(amount);

      const output = new OutputView();
      this.#printLottos(amount, lottos, output);

      //당첨번호 입력
      const winning = await this.#getWinningNumbers(input);
      const bonus = await this.#getBonusNumber(input, winning);
      this.#printResult(lottos, winning, bonus, amount, output);
    } catch (error) {
      OutputView.printError(error.message);
    }
  }

  async #getAmount(input) {
    try {
      const amount = Number(await input.readAmount());
      new AmountValidator(amount);
      return amount / 1000;
    } catch (error) {
      OutputView.printError(error.message);
      return await this.#getAmount(input);
    }
  }

  async #getWinningNumbers(input) {
    try {
      const arr = await input.readWinningNumbers();
      const winningNumbers = arr.map(Number);
      new WinningValidator(winningNumbers);

      return winningNumbers;
    } catch (error) {
      OutputView.printError(error.message);
      return await this.#getWinningNumbers(input);
    }
  }

  async #getBonusNumber(input, winningNumbers) {
    try {
      const bonusNumber = Number(await input.readBonusNumber());
      new BonusValidator(bonusNumber, winningNumbers);
      return bonusNumber;
    } catch (error) {
      OutputView.printError(error.message);
      return await this.#getBonusNumber(input);
    }
  }

  #issueLottos(amount) {
    try {
      const lottoIssuer = new LottoIssuer(amount);
      return lottoIssuer.issue();
    } catch (error) {
      OutputView.printError(error.message);
      return this.#issueLottos(amount);
    }
  }

  #printLottos(amount, lottos, output) {
    output.printAmount(amount);
    output.printLottos(lottos);
  }

  #printResult(lottos, winning, bonus, amount, output) {
    const lottoResult = new LottoResult(lottos, winning, bonus, amount);
    const resultMap = lottoResult.getResult();
    const profit = lottoResult.getProfit();
    output.printResult(resultMap);
    output.printProfit(profit);
  }
}

export default GameController;
