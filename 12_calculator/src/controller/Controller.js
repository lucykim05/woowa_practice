import InputView from '../view/InputView.js';
import Matcher from '../model/Matcher.js';
import Validator from '../model/Validator.js';
import OutputView from '../view/OutputView.js';
import Parser from '../model/Parser.js';

class Controller {
  #input;

  async readInput() {
    const result = await InputView.readInput();
    this.#input = result;
  }

  checkCustom() {
    const matcher = new Matcher();
    const customLetter = matcher.match(this.#input);
    if (customLetter) return customLetter;
  }

  parse() {
    const letter = this.getLetter();
    const parser = new Parser(letter, this.#input);
    return parser.parse();
  }

  getLetter() {
    const custom = this.checkCustom();
    const letter = [':', ','];
    if (custom) {
      Validator.validateCustom(custom);
      letter.push(custom);
    }
    return letter;
  }

  validateParsed(input) {
    console.log(input);
    input.forEach((x) => Validator.validateInput(x));
  }

  calculate(input) {
    let result = 0;
    input.forEach((x) => {
      result += x.map(Number).reduce((a, b) => a + b);
    });
    OutputView.printResult(result);
  }
}

export default Controller;
