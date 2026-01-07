import { DATE } from '../constants/constants.js';
import Parser from './Parser.js';
class Calendar {
  #total;
  #info;
  #holiday;

  constructor() {
    this.#info = [];
    this.#holiday = [];
  }

  initCalendar(input) {
    const [month, day] = input;
    this.#total = DATE.MONTH[month];
    this.#info = Parser.parseCalendarInfo(Number(month), day);
    this.makeHolidayInfo(Number(month));
  }

  makeHolidayInfo(month) {
    const holiday = DATE.HOLIDAY[month];
    if (holiday) holiday.forEach((x) => this.setHoliday(x));
  }

  setHoliday(number) {
    const info = this.#info.filter((x) => x.date === number);
    const bool = info[0].workday;
    if (bool) {
      info[0].workday = false;
      this.#holiday.push(number);
    }
  }

  checkWorkday(date) {
    const filtered = this.#info.filter((x) => x.date === date);
    return filtered[0].workday;
  }

  getInfo(date) {
    const filtered = this.#info.filter((x) => x.date === date);
    const holiday = this.#holiday.filter((x) => x.date === date);
    if (holiday.length === 0) {
      return filtered[0];
    }
    const result = (filtered[0].holiday = true);
    return result;
  }

  getTotal() {
    return this.#total;
  }

  getHoliday() {
    return this.#holiday;
  }
}

export default Calendar;
