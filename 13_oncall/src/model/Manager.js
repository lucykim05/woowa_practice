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
      const worker = this.getWorker(i);
      const result = this.makeResult(worker);
      this.#result.push(result);
    }
  }

  getWorker(number) {
    const bool = this.#calendar.checkWorkday(number);
    if (bool) return this.#organizer.workDay();
    return this.#organizer.weekEnd();
  }

  makeResult(worker, i) {
    const info = this.#calendar.getInfo(i);
    const result = (info.worker = worker);
    return result;
  }

  getResult() {
    return this.#result;
  }
}

export default Manager;
