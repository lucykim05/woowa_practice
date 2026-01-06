import { MissionUtils } from '@woowacourse/mission-utils';
import { Parser } from './Parser.js';

class MenuManager {
  #coaches;
  #category;
  #result;
  #menu;

  constructor(coaches, category, menu) {
    this.#coaches = coaches;
    this.#category = category;
    this.#result = [];
    this.#menu = menu;
  }

  shuffle(name) {
    for (const category of this.#category) {
      const menuName = Parser.organizeSameCategory(category, this.#menu);
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
      const randomNum = MissionUtils.Random.shuffle(arr)[0];
      const menu = menuName[randomNum - 1];

      const result = this.checkMenu(menu, coach);
      if (!result) return menu;
    }
  }

  makeArr(menuName) {
    const arr = Array.from({ length: menuName.length }, (_, i) => 1 + i);
    return arr;
  }

  checkMenu(menu, coach) {
    const foodInfo = coach.getInfo().food;
    console.log(foodInfo);
    console.log(menu);
    console.log(this.#result);
    if (foodInfo.includes(menu)) return true;
    if (this.#result.includes(menu)) return true;
    return false;
  }
}

export default MenuManager;
