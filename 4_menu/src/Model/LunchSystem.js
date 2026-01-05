import { DAYS, CATEGORY_LIMIT } from "../constants.js";
import { Random } from "@woowacourse/mission-utils";
import { Coach } from "./Coach.js";

export class LunchSystem {
  #coachList;
  #categoryList;
  constructor() {
    this.#coachList = [];
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

  saveCoach(list) {
    list.forEach((name) => {
      const coach = new Coach(name);
      this.#coachList.push(coach);
    });
  }

  saveCantEat(list) {
    this.#coachList.forEach((coach, idx) => {
      coach.saveCantEat(list[idx]);
    });
  }
}
