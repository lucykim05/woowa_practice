import { DATE } from '../constants/constants.js';
import Parser from './Parser.js';
class Calendar {
  #total;
  #info;

  constructor() {
    this.#info = [];
  }

  initCalendar(input) {
    const [month, day] = input;
    this.#total = DATE.MONTH[month];
    this.#info = Parser.parseCalendarInfo(Number(month), day);
  }

  checkWorkday(date) {
    const filtered = this.#info.filter((x) => x.date === date);
    return filtered[0].workday;
  }

  getInfo(number) {
    const filtered = this.#info.filter((x) => x.date === number);
    return filtered[0];
  }

  getTotal() {
    return this.#total;
  }
}

export default Calendar;
