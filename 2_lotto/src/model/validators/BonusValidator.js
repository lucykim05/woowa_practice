import { ERROR } from '../../constants/ErrorMessage.js';
import NumberValidator from './NumberValidator.js';

class BonusValidator {
  constructor(number, winningNumbers) {
    this.#validate(number, winningNumbers);
  }

  #validate(number, winningNumbers) {
    const numberValidator = new NumberValidator();
    numberValidator.validate(number);
    this.#checkRange(number);
    this.#checkIsUnique(number, winningNumbers);
  }

  #checkRange(number) {
    if (number > 45) throw new Error(ERROR.NOT_IN_RANGE);
  }

  #checkIsUnique(number, winningNumbers) {
    if (winningNumbers.includes(number)) throw new Error(ERROR.NOT_UNIQUE);
  }
}

export default BonusValidator;
