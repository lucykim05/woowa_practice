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
}

export default Validator;
