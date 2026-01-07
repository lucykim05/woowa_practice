import { DATE } from '../constants/constants.js';
class Calendar {
  #total;
  #info;

  constructor() {
    this.#info = [];
  }

  initCalendar(input) {
    const [month, day] = input;
    this.#total = DATE.MONTH.Number(month);
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
