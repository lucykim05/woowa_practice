import { Validator } from "../Model/Validator.js";
import { InputView } from "../View/InputView.js";
import { lottoSystem } from "../Model/LottoSystem.js";
import { OutputView } from "../View/OutputView.js";
import { Parser } from "../Utils/Parser.js";

export const LottoController = {
  async start() {
    try {
      const price = await this.getPrice();
      lottoSystem.makeLotto(price);
      const randNumResult = lottoSystem.randResult();
      OutputView.random(randNumResult);

      const winningNum = await this.getWinningNum();
      const bonusNum = await this.getBonusNum();
    } catch (error) {
      throw Error(error.message);
    }
  },

  async getPrice() {
    try {
      const rawPrice = await InputView.buy();
      Validator.price(rawPrice);
      return Number(rawPrice);
    } catch (error) {
      throw Error(error.message);
    }
  },

  async getWinningNum() {
    try {
      const winningNum = await InputView.winning();
      return Parser.comma(winningNum).map(Number);
    } catch (error) {
      throw Error(error.message);
    }
  },

  async getBonusNum() {
    try {
      const bonusNum = await InputView.bonus();
      return Number(bonusNum);
    } catch (error) {
      throw Error(error.message);
    }
  },
};
