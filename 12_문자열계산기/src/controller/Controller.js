import Input from '../view/InputView.js';
import Calculator from '../model/Calculator.js';
import OutputView from '../view/OutputView.js';

class Controller {
  async run() {
    const input = await Input.readInput();
    const calculator = new Calculator(input);
    const result = calculator.getResult();
    OutputView.printResult(result);
  }
}

export default Controller;
