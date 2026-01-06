export class System {
  #month;
  #startDay;
  #holidayWorkers;
  #weeklyWorkers;
  constructor(day, month) {
    this.#month = month;
    this.#startDay = day;
  }

  saveWorkers(weekly, holiday) {
    this.#weeklyWorkers = weekly;
    this.#holidayWorkers = holiday;
  }
}
