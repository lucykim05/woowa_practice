import { Validator } from "../Model/Validator.js";
import { InputView } from "../View/InputView.js";
import { lottoSystem } from "../Model/LottoSystem.js";
import { OutputView } from "../View/OutputView.js";

export const LottoController = {
  async start() {
    try {
      const price = await this.getPrice();
      lottoSystem.makeLotto(price);
      const randNumResult = lottoSystem.randResult();
      OutputView.random(randNumResult);
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
};
