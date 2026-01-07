import Validator from '../model/Validator.js';
import InputView from '../view/InputView.js';
import Calendar from '../model/Calendar.js';
import Organizer from '../model/Organizer.js';
import Manager from '../model/Manager.js';
import { Console } from '@woowacourse/mission-utils';

class Controller {
  #calendar;
  #organizer;

  constructor() {}

  async makeCalendar() {
    try {
      const date = await InputView.readDate();
      Validator.validateDate(date);
      const calendar = new Calendar();
      this.#calendar = calendar;
      calendar.initCalendar(date);
    } catch (error) {
      Console.print(error.message);
      await this.makeCalendar();
    }
  }

  async makeOrganizer() {
    try {
      const workDay = await InputView.readWorkDay();
      const weekEnd = await InputView.readWeekEnd();
      Validator.validateSchedule(workDay, weekEnd);
      const organizer = new Organizer(workDay, weekEnd);
      this.#organizer = organizer;
    } catch (error) {
      Console.print(error.message);
      await this.makeOrganizer();
    }
  }

  makeResult() {
    const manager = new Manager(this.#calendar, this.#organizer);
    manager.manage();
    return manager.getResult();
  }
}

export default Controller;
