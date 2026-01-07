import { DAY, DAY_MAP, MONTH, WORKDAY } from '../constants/constants.js';

class Calendar {
  #total;
  #info;

  constructor() {
    this.#info = [];
  }

  initCalendar(input) {
    const [month, day] = input;
    this.#total = MONTH.Number(month);
    this.makeInfo(day);
  }

  makeInfo(day) {
    let total = DAY_MAP[day];
    for (let i = 0; i < this.#total; i++) {
      const remain = (total + i) % 7;
      const dayName = DAY[remain];
      this.pushInfo(i, dayName);
      total++;
    }
  }

  pushInfo(number, dayName) {
    const bool = WORKDAY.includes(dayName);
    this.#info.push({
      date: number + 1,
      day: dayName,
      workday: bool,
    });
  }
}

export default Calendar;
