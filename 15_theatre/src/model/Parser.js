class Parser {
  #database;

  constructor(database) {
    this.#database = database;
  }

  getSeatInfo(theater, time) {
    const data = this.#database.getSeatData();
    const filtered = data
      .filter((x) => x.theater === theater)
      .filter((x) => x.time === time);
    return filtered[0];
  }
}

export default Parser;
