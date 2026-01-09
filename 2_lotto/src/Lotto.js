import { ERROR, LOTTO } from "./constants.js";
import { Validator } from "./Model/Validator.js";

export class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.lotto(numbers);
  }

  // TODO: 추가 기능 구현
  getNumberMsg() {
    return `[${this.#numbers.join(", ")}]`;
  }

  match(winningNum, bonusNum) {
    const match = winningNum.filter((num) =>
      this.#numbers.includes(num)
    ).length;

    if (this.#numbers.includes(bonusNum)) return [match, true];
    return [match, false];
  }
}

export default Lotto;
