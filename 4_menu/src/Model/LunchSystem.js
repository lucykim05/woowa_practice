import {
  DAYS,
  CATEGORY_LIMIT,
  CATEGORY,
  DEFAULT_MSG,
  MSG_TOOL,
} from "../constants.js";
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

  #convertCategory() {
    const categoryString = [DEFAULT_MSG.CATEGORY];
    this.#categoryList.forEach((category) => {
      categoryString.push(CATEGORY[category - 1]);
    });
    return categoryString;
  }

  #makeCategoryMsg() {
    const categoryString = this.#convertCategory();
    let categoryMsg = `${MSG_TOOL.START}${categoryString.join(
      MSG_TOOL.DELIMITER
    )}${MSG_TOOL.END}`;
    return categoryMsg;
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

  recommend() {
    this.#coachList.forEach((coach) => {
      this.#categoryList.forEach((category) => {
        const categoryIdx = category - 1;
        coach.recommend(categoryIdx);
      });
    });
  }

  getResult() {
    const msg = [];
    msg.push(this.#makeCategoryMsg());
    this.#coachList.forEach((coach) => {
      msg.push(coach.makeResultMsg());
    });
    return msg;
  }
}
