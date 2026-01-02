export class Coach {
  #name;
  #dontEatList;
  #menuList;

  constructor(name) {
    this.#name = name;
    this.#menuList = [];
  }

  checkMenu(menu) {
    if (this.#menuList.includes(menu)) return false;
    return true;
  }

  saveDontEat(menuList) {
    this.#dontEatList = menuList;
  }

  //단일 메뉴 저장
  saveMenu(menu) {
    this.#menuList.push(menu);
  }

  getName() {
    return this.#name;
  }

  getMenu() {
    return this.#menuList;
  }
}
