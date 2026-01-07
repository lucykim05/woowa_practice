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
      const result = this.makeResult(worker, i);
      this.#result.push(result);
    }
  }

  getWorker(number) {
    const bool = this.#calendar.checkWorkday(number);
    return this.#organizer.manageWorker(bool);
  }

  makeResult(worker, i) {
    const info = this.#calendar.getInfo(i);
    info.worker = worker;
    return info;
  }

  getResult() {
    return this.#result;
  }
}

export default Manager;
