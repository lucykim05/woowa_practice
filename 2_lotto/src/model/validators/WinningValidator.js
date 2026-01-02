import { ERROR } from '../../constants/ErrorMessage.js';
import NumberValidator from './NumberValidator.js';

class WinningValidator {
  validate(numbers) {
    const numberValidator = new NumberValidator();
    numbers.forEach((x) => {
      numberValidator.validate(x);
      this.#checkRange(x);
    });
    this.#checkLength(numbers);
    this.#checkIsUnique(numbers);
  }

  #checkRange(input) {
    if (input < 1 || input > 45) throw new Error(ERROR.NOT_IN_RANGE);
  }

  #checkLength(input) {
    if (input.length !== 6) throw new Error(ERROR.LENGTH);
  }

  #checkIsUnique(input) {
    const unique = [...new Set(input.length)];
    if (unique.length !== input.length) throw new Error(ERROR.NOT_UNIQUE);
  }
}

export default WinningValidator;
