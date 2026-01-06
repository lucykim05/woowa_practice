import { MissionUtils } from '@woowacourse/mission-utils';
import { CategoryValidaotr } from './Validator.js';

class CategoryManager {
  #category;
  #length;

  constructor() {
    this.#category = [];
    this.#length = 0;
  }

  make() {
    while (this.#length !== 5) {
      this.makeRandom();
    }
  }

  makeRandom() {
    const randomNum = MissionUtils.Random.pickNumberInRange();
    const bool = CategoryValidaotr.validateUnique(randomNum, arr);
    if (!bool) {
      this.#category.push(randomNum);
      this.#length++;
    }
  }

  getCategory() {
    return this.#category;
  }
}

export default CategoryManager;
