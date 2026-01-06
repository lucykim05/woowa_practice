import { DAY_OF_WEEK, MONTH_INFO, WEEKEND } from "../constants.js";

export class System {
  #month;
  #day;
  #startDay;
  #holidayWorkers;
  #weeklyWorkers;

  #currentDayIdx;
  #currentWeeklyWorkerIdx;
  #currentHolidayWorkerIdx;

  #arrangedList;

  constructor(day, startMonth, month) {
    this.#month = month;
    this.#day = MONTH_INFO[startMonth];
    this.#startDay = day;

    this.#currentDayIdx = DAY_OF_WEEK.indexOf(day);
    this.#currentWeeklyWorkerIdx = 0;
    this.#currentHolidayWorkerIdx = 0;
    this.#arrangedList = [];
  }

  #calculateDayIdx() {
    return Math.floor(this.#currentDayIdx % DAY_OF_WEEK.length);
  }

  saveWorkers(weekly, holiday) {
    this.#weeklyWorkers = weekly;
    this.#holidayWorkers = holiday;
  }

  arrange() {
    for (let i = 0; i < this.#day; i++) {
      const dayIdx = this.#calculateDayIdx();
      const day = DAY_OF_WEEK[dayIdx];
      if (WEEKEND.includes(day)) {
        this.#arrangedList.push(
          this.#holidayWorkers[this.#currentHolidayWorkerIdx]
        );
        this.#currentHolidayWorkerIdx++;
        this.#currentDayIdx++;
        continue;
      }

      this.#arrangedList.push(
        this.#weeklyWorkers[this.#currentWeeklyWorkerIdx]
      );
      this.#currentWeeklyWorkerIdx++;
      this.#currentDayIdx++;
    }
  }

  makeResultMsg() {
    return this.#arrangedList;
  }
}
