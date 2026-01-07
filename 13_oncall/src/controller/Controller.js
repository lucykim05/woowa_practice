import Validator from '../model/Validator.js';
import InputView from '../view/InputView.js';
import Calendar from '../model/Calendar.js';

class Controller {
  #calendar;

  constructor() {}

  async makeCalendar() {
    const date = await InputView.readDate();
    Validator.validateDate();
    const calendar = new Calendar();
    this.#calendar = calendar;
    calendar.initCalendar(date);
  }
}

export default Controller;
