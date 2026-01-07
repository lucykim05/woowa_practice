import { DATE } from '../constants/constants.js';
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
    this.#total = DATE.MONTH[Number(month)];
    this.makeInfo(day);
    this.makeHolidayInfo(Number(month));
  }

  makeInfo(day) {
    let total = DATE.DAY_MAP[day];
    for (let i = 0; i < this.#total; i++) {
      const remain = (total + i) % 7;
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
}

export default Calendar;
