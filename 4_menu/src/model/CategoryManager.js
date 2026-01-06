import { MissionUtils } from '@woowacourse/mission-utils';
import { CategoryValidaotr } from './Validator.js';
import { CATEGORY } from '../constants/category.js';

class CategoryManager {
  #category;
  #length;

  constructor() {
    this.#category = [];
    this.#length = 0;
    this.#make();
  }

  #make() {
    while (this.#length !== 5) {
      this.#makeRandom();
    }
    this.#category.map((x) => CATEGORY[x]);
    console.log(this.#category);
  }

  #makeRandom() {
    const randomNum = MissionUtils.Random.pickNumberInRange(1, 5);
    const bool = CategoryValidaotr.validateUnique(randomNum, this.#category);
    if (bool) {
      this.#category.push(randomNum);
      this.#length++;
    }
  }
}

export default CategoryManager;
