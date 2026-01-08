import InputView from '../view/InputView.js';
import Repository from '../model/Repository.js';

class Controller {
  initialize() {
    const data = InputView.readFile();
    this.repo = new Repository();
    this.repo.setData(data);
  }
}

export default Controller;
