import Validator from '../model/Validator.js';
import InputView from '../view/InputView.js';
import Calendar from '../model/Calendar.js';
import Organizer from '../model/Organizer.js';

class Controller {
  #calendar;
  #organizer;

  constructor() {}

  async makeCalendar() {
    const date = await InputView.readDate();
    Validator.validateDate(date);
    const calendar = new Calendar();
    this.#calendar = calendar;
    calendar.initCalendar(date);
  }

  async makeOrganizer() {
    const workDay = await InputView.readWorkDay();
    const weekDay = await InputView.readWeekEnd();
    Validator.validateSchedule(workDay, weekDay);
    const organizer = new Organizer(workDay, weekDay);
    this.#organizer = organizer;
  }

  makeResult() {
    const manager = new Manager(this.#calendar, this.#organizer);
  }
}

export default Controller;
