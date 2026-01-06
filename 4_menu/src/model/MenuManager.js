import { Random } from '@woowacourse/mission-utils';
import Parser from './Parser.js';

class MenuManager {
  #coaches;
  #names;
  #result;

  constructor(coaches, names) {
    this.#coaches = coaches;
    this.#names = names;
    this.#result = [];
  }

  shuffle(category) {
    const menuName = Parser.organizeSameCategory(category);
    for (const name of this.#names) {
      const filtered = this.#coaches.filter((x) => x.name === name)[0];
      const coach = filtered.coach;
      const menu = this.shuffleMenu(menuName, coach);
      coach.setMenu(menu);
    }
  }

  shuffleMenu(menuName, coach) {
    while (true) {
      const menu = Random.shuffle(menuName)[0];
      const result = this.checkMenu(menu, coach);
      if (!result) break;
    }
    this.#result.push(menu);
    return menu;
  }

  checkMenu(menu, coach) {
    const foodInfo = coach.getInfo();
    if (foodInfo.includes(menu)) return true;
    if (this.#result.includes(menu)) return true;
    return false;
  }
}

export default MenuManager;
