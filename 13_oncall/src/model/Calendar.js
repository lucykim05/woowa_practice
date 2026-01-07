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
    // this.#makeHolidayInfo(Number(month));
  }

  #makeHolidayInfo(month) {
    const holiday = DATE.HOLIDAY[month];
    if (holiday) holiday.forEach((x) => this.#setHoliday(x));
  }

  #setHoliday(number) {
    const info = this.#info.filter((x) => x.date === number);
    const bool = info[0].workday;
    if (bool) {
      info[0].workday = false;
      info[0].holiday = true;
    }
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
