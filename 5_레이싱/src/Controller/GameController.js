import Validator from '../model/Validator.js';
import InputView from '../view/InputView.js';

class GameController {
  async readInfo() {
    const names = await this.readNames();
    const count = await this.readCount();
    const game = new Game(names);
  }

  async readNames() {
    const names = InputView.readNames();
    Validator.validateNames(names);
    return names;
  }

  async readCount() {
    const count = InputView.readCount();
    Validator.validateCount(count);
    return count;
  }
}
