class Manager {
  #calendar;
  #organizer;
  #result;

  constructor(calendar, organizer) {
    this.#calendar = calendar;
    this.#organizer = organizer;
    this.#result = [];
  }

  manage() {
    const total = this.#calendar.getTotal();
    for (let i = 1; i <= total; i++) {
      const result = this.#getWorker(i);
      this.#result.push(result);
    }
  }

  #getWorker(number) {
    const info = this.#calendar.getInfo(number);
    const bool = info.workday;
    return this.#organizer.manageWorker(bool, info);
  }

  getResult() {
    return this.#result;
  }
}

export default Manager;
