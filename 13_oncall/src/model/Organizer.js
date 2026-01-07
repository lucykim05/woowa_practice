class Organizer {
  #workDay;
  #weekEnd;
  #worker;

  constructor(workDay, weekEnd) {
    this.#workDay = workDay;
    this.#weekEnd = weekEnd;
    this.#worker = '';
  }

  workDay() {
    const name = this.#workDay.shift();
    const bool = this.checkUnique(this.#workDay);
    if (!bool) {
      this.#worker = name;
      return name;
    }
    if (name === this.#worker) {
      return this.changeWorkDayWorker(name);
    }
    this.#worker = name;
    this.#workDay.push(name);
    return name;
  }

  weekEnd() {
    const name = this.#weekEnd.shift();
    const bool = this.checkUnique(this.#weekEnd);
    if (!bool) {
      this.#worker = name;
      return name;
    }
    if (name === this.#worker) {
      return this.changeWeekEndWorker(name);
    }
    this.#worker = name;
    this.#weekEnd.push(name);
    return name;
  }

  changeWeekEndWorker(name) {
    const next = this.#weekEnd.shift();
    this.#worker = next;
    this.#weekEnd.unshift(name);
    this.#weekEnd.push(name);
    this.#weekEnd.push(next);
    return next;
  }

  changeWorkDayWorker(name) {
    const next = this.#workDay.shift();
    this.#worker = next;
    this.#workDay.unshift(name);
    this.#workDay.push(name);
    this.#workDay.push(next);
    return next;
  }

  checkUnique(arr) {
    const unique = [...new Set(arr)];
    return unique.length === arr.length;
  }
}

export default Organizer;
