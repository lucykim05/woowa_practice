class Coach {
  #name;
  #info;
  #food;

  constructor(name, info) {
    this.#name = name;
    this.#info = info;
    this.#food = [];
  }

  setMenu(menu) {
    this.#food.push(menu);
    this.#info.push(menu);
  }

  getInfo() {
    return this.#info;
  }
}

export default Coach;
