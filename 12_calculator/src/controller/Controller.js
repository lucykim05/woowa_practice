import InputView from '../view/InputView.js';

class Controller {
  async readInput() {
    const result = await InputView.readInput();
    return result;
  }
}

export default Controller;
