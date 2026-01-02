import { ERROR } from '../../constants/ErrorMessage.js';

class NumberValidator {
  validate(input) {
    this.#checkIsNumber(input);
    this.#checkIsInteger(input);
    this.#checkIsNatural(input);
  }

  #checkIsNumber(input) {
    if (Number.isNaN(input)) throw new Error(ERROR.NOT_A_NUMBER);
  }

  #checkIsInteger(input) {
    if (!Number.isInteger(input)) throw new Error(ERROR.NOT_NATURAL);
  }

  #checkIsNatural(input) {
    if (input < 1) throw new Error(ERROR.NOT_NATURAL);
  }
}

export default NumberValidator;
