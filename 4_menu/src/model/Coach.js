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
    const foodInfo = this.#info.food;
    foodInfo.push(menu);
    this.#info.food = foodInfo;
  }

  getInfo() {
    return this.#info;
  }

  getFood() {
    return this.#food;
  }
}

export default Coach;
