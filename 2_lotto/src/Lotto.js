import { ERROR, LOTTO } from "./constants.js";
import { Validator } from "./Model/Validator.js";

export class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.COUNT) {
      throw new Error(ERROR.LOTTO_OUT_OF_RANGE);
    }
    Validator.lotto(numbers);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
