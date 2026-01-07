import Validator from '../model/Validator.js';
import InputView from '../view/InputView.js';

class Controller {
  #calendar;

  constructor() {}

  async makeCalendar() {
    const date = await InputView.readDate();
    Validator.validateDate();
  }
}

export default Controller;
