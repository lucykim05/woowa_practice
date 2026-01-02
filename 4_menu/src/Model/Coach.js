export class Coach {
  #name;
  #dontEatList;
  #menuList;

  constructor(name) {
    this.#name = name;
  }

  #checkMenu(menu) {}

  saveDontEat(menuList) {
    this.#dontEatList = menuList;
  }

  //단일 메뉴 저장
  saveMenu(menu) {}
}
