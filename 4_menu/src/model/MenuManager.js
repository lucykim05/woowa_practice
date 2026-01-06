import { Random } from '@woowacourse/mission-utils';
import { Parser } from './Parser.js';

class MenuManager {
  #coaches;
  #names;
  #result;
  #menu;

  constructor(coaches, names, menu) {
    this.#coaches = coaches;
    this.#names = names;
    this.#result = [];
    this.#menu = menu;
  }

  shuffle(category) {
    const menuName = Parser.organizeSameCategory(category, this.#menu);
    for (const name of this.#names) {
      const filtered = this.#coaches.filter((x) => x.name === name)[0];
      const coach = filtered.coach;
      const menu = this.shuffleMenu(menuName, coach);
      this.#result.push(menu);
      coach.setMenu(menu);
    }
  }

  shuffleMenu(menuName, coach) {
    while (true) {
      const arr = this.makeArr(menuName);
      const menu = menuName[Random.shuffle(arr)[0]];
      const result = this.checkMenu(menu, coach);
      if (!result) return menu;
    }
  }

  makeArr(menuName) {
    const arr = Array.from({ length: menuName.length }, (_, i) => 0 + i);
    return arr;
  }

  checkMenu(menu, coach) {
    const foodInfo = coach.getInfo().food;
    if (foodInfo.includes(menu)) return true;
    if (this.#result.includes(menu)) return true;
    return false;
  }
}

export default MenuManager;
