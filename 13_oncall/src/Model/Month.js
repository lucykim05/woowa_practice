import { MONTH_INFO, NATIONAL_HOLIDAY } from "../constants.js";

export class Month {
  #month;
  #days;
  #holidays;
  constructor(month) {
    this.#month = Number(month);
    this.#days;
    this.#holidays;

    this.#initialize();
  }

  #initialize() {
    const day = MONTH_INFO[this.#month];
    this.#days = Array.from({ length: day }, (_, i) => i + 1);

    if (NATIONAL_HOLIDAY[this.#month])
      this.#holidays = NATIONAL_HOLIDAY[this.#month];
  }
}
