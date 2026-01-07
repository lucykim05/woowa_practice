class Organizer {
  #workDay;
  #weekEnd;
  #worker;

  constructor(workDay, weekEnd) {
    this.#workDay = workDay;
    this.#weekEnd = weekEnd;
    this.#worker = '';
  }

  manageWorker(bool) {
    if (bool) return this.#makeResult(this.#workDay);
    return this.#makeResult(this.#weekEnd);
  }

  #makeResult(arr) {
    const name = arr.shift();
    const bool = this.#checkUnique(arr);
    if (!bool) {
      this.#worker = name;
      return name;
    }
    if (name === this.#worker) {
      return this.#changeWorker(name, arr);
    }
    this.#worker = name;
    arr.push(name);
    return name;
  }

  #changeWorker(name, arr) {
    const next = arr.shift();
    this.#worker = next;
    arr.unshift(name);
    arr.push(name);
    arr.push(next);
    return next;
  }

  #checkUnique(arr) {
    const unique = [...new Set(arr)];
    return unique.length === arr.length;
  }
}

export default Organizer;
