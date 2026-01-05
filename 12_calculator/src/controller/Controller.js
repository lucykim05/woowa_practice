import InputView from '../view/InputView.js';
import Matcher from '../model/Matcher.js';

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
    const custom = this.checkCustom();
  }
}

export default Controller;
