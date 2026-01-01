import { ERROR } from '../Constants/ErrorMessage.js';

class Validator {
  static validateName(input) {
    this.#checkEnglish(input);
    this.#checkLength(input);
  }

  static validateNum(input) {
    this.#checkIsNumber(input);
    this.#checkIsInteger(input);
  }

  static #checkEnglish(input) {
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(input)) throw new Error(ERROR.NOT_ENGLISH);
  }

  static #checkLength(input) {
    if (input.length < 1 || input.length > 5)
      throw new Error(ERROR.WRONG_LENGTH);
  }

  static #checkIsNumber(input) {
    if (!Number.isNaN(input)) throw new Error(ERROR.NOT_A_NUMBER);
  }

  static #checkIsInteger(input) {
    if (!Number.isInteger(input)) throw new Error(ERROR.NOT_INTEGER);
  }

  static validateType(input) {
    this.validateNum(input);
    if (input !== 1 && input !== 2) throw new Error(ERROR.NOT_IN_RANGE);
  }

  static validateRetry(input) {
    this.#checkIsNumber(input);
    if (input !== 0 && input !== 1) throw new Error(ERROR.NOT_IN_RANGE_RETRY);
  }
}

export default Validator;
