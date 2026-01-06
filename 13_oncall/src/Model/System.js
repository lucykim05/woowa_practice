export class System {
  #month;
  #startDay;
  #holidayWorkers;
  #weelyWorkers;
  constructor(day, month) {
    this.#month = month;
    this.#startDay = day;
  }
}
