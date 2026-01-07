import { DATE } from '../constants/constants.js';
class Calendar {
  #total;
  #info;
  #holiday;
  #month;

  constructor() {
    this.#info = [];
    this.#holiday = [];
  }

  initCalendar(input) {
    const [month, day] = input;
    this.#month = month;
    this.#total = DATE.MONTH[Number(month)];
    this.makeInfo(day);
    this.makeHolidayInfo(Number(month));
  }

  makeInfo(day) {
    let total = DATE.DAY_MAP[day];
    for (let i = 0; i < this.#total; i++) {
      const remain = total % 7;
      const dayName = DATE.DAY_NAME[remain];
      this.pushInfo(i, dayName);
      total++;
    }
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

  pushInfo(number, dayName) {
    const bool = DATE.WORKDAY.includes(dayName);
    this.#info.push({
      date: number + 1,
      day: dayName,
      workday: bool,
    });
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

  getMonth() {
    return this.#month;
  }
}

export default Calendar;
