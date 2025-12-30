import Calculator from './Calculate.js';
import Input from './Input.js';
import Output from './Output.js';
import Validator from './Validator.js';

class App {
  async run() {
    try {
      const input = await Input.getAmount();
      const unitInput = await Input.getUnit();
      Output.printStart();
      this.validate(input, unitInput);
      const keys = Calculator.getKey(unitInput);
      input.forEach((amount) => {
        const result = Calculator.countAmount(unitInput, amount);
        Output.printResult(amount, result);
      });
      Output.printUnit(keys);
    } catch (error) {
      console.error(error);
    }
  }

  validate(amount, unit) {
    this.validateUnit(unit);
    this.validateAmount(amount);
  }

  validateAmount(amount) {
    const validator = new Validator();
    amount.forEach((x) => {
      validator.validateAmount(x);
    });
  }

  validateUnit(unit) {
    const validator = new Validator();
    unit.forEach((x) => {
      validator.validateUnit(x);
    });
  }

  calculate(amount, unit) {}
}

export default App;
