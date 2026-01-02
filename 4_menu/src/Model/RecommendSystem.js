import { Random } from "@woowacourse/mission-utils";
import { DAYS, CATEGORY_LIMIT, CATEGORY } from "../constants.js";

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
      if (this.#checkSameCategory(category)) {
        this.#saveCategory(category);
        return category;
      }
    }
  }

  #checkSameCategory(category) {
    const duplicateCategory = this.#selectedCategories.filter(
      (c) => c === category
    );
    if (duplicateCategory.length < CATEGORY_LIMIT) {
      return true;
    }
    return false;
  }

  #saveCategory(category) {
    this.#selectedCategories.push(category);
  }

  #saveRandomMenu(categoryIndex) {
    for (let i = 0; i < this.#coachList.length; i++) {
      const randomIndex = this.#pickRandomMenu(categoryIndex);
      const selectedMenu = this.#menuList[categoryIndex][randomIndex];
      const isMenuOk = this.#coachList[i].checkMenu(selectedMenu);
      if (isMenuOk) {
        this.#coachList[i].saveMenu(selectedMenu);
        continue;
      }
      --i;
    }
  }

  #pickRandomMenu(category) {
    const menuIndex = Array.from(
      { length: this.#menuList[category].length },
      (_, i) => i
    );
    const randMenuIndex = Random.shuffle(menuIndex)[0];
    return randMenuIndex;
  }

  recommendProcess() {
    for (let day = 0; day < DAYS; day++) {
      const categoryIndex = this.#pickRandomCategory() - 1;
      this.#saveRandomMenu(categoryIndex);
    }
  }

  getCategories() {
    const categories = [];
    this.#selectedCategories.forEach((category) => {
      categories.push(CATEGORY[category]);
    });

    return categories;
  }
}
