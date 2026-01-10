import Validator from './Validator.js';
import Parser from './Parser.js';

class Calculator {
  constructor(input) {
    this.input = input;
    this.letters = Parser.parseLetter(input);
  }

  getResult() {
    for (const letter of this.letters) {
      this.input = this.input.replaceAll(letter, ' ');
    }
    this.input = this.input.replaceAll('//', '').replaceAll('\\n', '');
    const splitted = this.input.split(' ');
    Validator.validateArr(splitted);
    return splitted.reduce((a, b) => a + b);
  }
}

export default Calculator;
