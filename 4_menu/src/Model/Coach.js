export class Coach {
  #name;
  #cantEat;
  #menuList;
  constructor(name) {
    this.#name = name;
    this.#menuList = [];
  }

  saveCantEat(list) {
    this.#cantEat = list;
  }
}
