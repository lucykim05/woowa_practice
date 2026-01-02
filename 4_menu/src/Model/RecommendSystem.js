import { Random } from "@woowacourse/mission-utils";
import { DAYS, CATEGORY_LIMIT } from "../constants.js";

export class RecommendSystem {
  #coachList;
  #menuList;
  #selectedCategories;

  constructor(coachList, menuSample) {
    this.#coachList = coachList;
    this.#menuList = menuSample;
    this.#selectedCategories = [];
  }

  #pickRandomCategory() {
    while (true) {
      const category = Random.pickNumberInRange(1, 5);
      const duplicateCategory = this.#selectedCategories.filter(
        (c) => c === category
      );
      if (duplicateCategory.length < CATEGORY_LIMIT) {
        this.#selectedCategories.push(category);
        return category;
      }
    }
  }

  #pickRandomMenu(menuList, category) {
    const menuIndex = Array.from(
      { length: menuList[category - 1].length },
      (_, i) => i
    );
    const randMenuIndex = Random.shuffle(menuIndex)[0];
    return randMenuIndex;
  }

  recommendProcess(menuList) {
    for (let day = 0; day < DAYS; day++) {
      const category = this.#pickRandomCategory();
      const menuIndex = this.#pickRandomMenu(menuList, category);
    }
  }
}
