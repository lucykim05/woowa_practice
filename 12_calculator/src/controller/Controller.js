import InputView from '../view/InputView.js';
import Matcher from '../model/Matcher.js';
import Validator from '../model/Validator.js';

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

  makeParser() {
    const letter = this.getLetter();
    const parser = new Parser(letter, this.#input);
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
}

export default Controller;
