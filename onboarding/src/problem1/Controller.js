import { Random } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class Controller {
  constructor(name) {
    this.name = name;
    this.page = [0, 0];
    this.score = 0;
  }

  getRandomPage() {
    const randomPage = Random.pickNumberInRange(3, 398);
    if (randomPage % 2 === 0) {
      const input = [randomPage - 1, randomPage];
      this.validatePage(input);
      this.page = input;
    } else {
      const input = [randomPage, randomPage + 1];
      this.validatePage(input);
      this.page = input;
    }
  }

  getPage() {
    return this.page;
  }

  validatePage(input) {
    Validator.validate(input);
    return input;
  }

  getMax(input) {
    const [a, b] = input;
    const leftSum = String(a)
      .split('')
      .map(Number)
      .reduce((a, b) => a + b);
    const leftMultiple = String(a)
      .split('')
      .map(Number)
      .reduce((a, b) => a * b);
    const rightSum = String(b)
      .split('')
      .map(Number)
      .reduce((a, b) => a + b);
    const rightMultiple = String(b)
      .split('')
      .map(Number)
      .reduce((a, b) => a * b);
    this.score = Math.max(leftSum, leftMultiple, rightSum, rightMultiple);
  }

  getScore() {
    this.getMax(this.page);
    return this.score;
  }
}

export default Controller;
