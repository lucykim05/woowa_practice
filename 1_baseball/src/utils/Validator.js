import { ERROR } from '../Constants/ErrorMessage.js';

class Validator {
  static validateNumber(input) {
    this.#checkIsNumber(Number(input));
    this.#checkLength(input);
    this.#checkUnique(input);
    String(input)
      .split('')
      .map(Number)
      .forEach((x) => {
        const num = Number(x);
        this.#checkIsInteger(num);
      });
  }

  static #checkIsNumber(input) {
    if (Number.isNaN(input)) throw new Error(ERROR.NOT_A_NUMBER);
  }

  static #checkIsInteger(input) {
    if (!Number.isInteger(input) || input === 0)
      throw new Error(ERROR.NOT_INTEGER);
  }

  static #checkLength(input) {
    if (input.length !== 3) throw new Error(ERROR.LENGTH_ERROR);
  }

  static #checkUnique(input) {
    const arr = String(input).split('');
    const unique = [...new Set(arr)];
    if (unique.length !== arr.length) throw new Error(ERROR.NOT_UNIQUE);
  }

  //======================================//

  static validateStart(input) {
    this.#checkIsNumber(input);
    this.#checkRange(input);
  }

  static #checkRange(input) {
    if (input !== 1 && input !== 2) throw new Error(ERROR.NOT_IN_RANGE);
  }
}

export default Validator;
