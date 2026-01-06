import Parser from './Parser.js';

class MenuManager {
  #info;
  #coaches;

  constructor(info, coaches) {
    this.#info = info;
    this.#coaches = coaches;
  }

  shuffle(category) {
    const menuName = Parser.organizeSameCategory(category);
  }
}

export default MenuManager;
