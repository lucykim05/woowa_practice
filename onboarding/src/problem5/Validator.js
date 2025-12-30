import { ERROR } from './constants.js';

class Validator {
  validate(num) {
    this.checkIsInteger(num);
    this.checkIsInteger(num);
    this.checkRange(num);
  }

  checkIsNumber(num) {
    if (Number.isNaN(num)) throw new Error(ERROR.NOT_A_NUMBER);
  }

  checkIsInteger(num) {
    if (!Number.isInteger(num)) throw new Error(ERROR.NOT_INTEGER);
  }

  checkRange(num) {
    if (num < 1 || num > 1000000) throw new Error(ERROR.NOT_IN_RANGE);
  }
}

export default Validator;
