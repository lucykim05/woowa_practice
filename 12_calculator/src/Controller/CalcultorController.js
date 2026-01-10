import { calculator } from "../Model/Calculator.js";
import { InputView } from "../View/InputView.js";
import { OutputView } from "../View/OutputView.js";

export const CalculatorController = {
  async process() {
    try {
      const input = await this.getInput();
      calculator.processInput(input);
      const result = calculator.getResult();
      OutputView.result(result);
    } catch (error) {
      throw Error(error.message);
    }
  },

  async getInput() {
    return await InputView.option();
  },
};
