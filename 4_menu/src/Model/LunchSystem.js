import { DAYS, CATEGORY_LIMIT } from "../constants.js";
import { Random } from "@woowacourse/mission-utils";

export class LunchSystem {
  #coachList;
  #categoryList;
  constructor() {
    this.#categoryList = [];

    this.#pickCategory();
  }

  #pickCategory() {
    while (this.#categoryList.length < DAYS) {
      const category = Random.pickNumberInRange(1, 5);
      const sameCategory = this.#categoryList.filter((v) => v === category);

      if (sameCategory <= CATEGORY_LIMIT) this.#categoryList.push(category);
    }
  }
}
