import Calculator from './Calculate.js';
import Input from './Input.js';
import Output from './Output.js';
import Validator from './Validator.js';

class App {
  async run() {
    try {
      const input = await Input.getAmount();
      Output.printStart();
      const validator = new Validator();
      input.forEach((amount) => {
        validator.validate(amount);
        const calculator = new Calculator();
        const result = calculator.countAmount(amount);
        Output.printResult(amount, result);
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default App;
