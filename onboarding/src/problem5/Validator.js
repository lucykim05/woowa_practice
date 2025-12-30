import { ERROR } from './constants.js';

class Validator {
  validateAmount(num) {
    this.checkIsInteger(num);
    this.checkIsInteger(num);
    this.checkRange(num);
  }

  validateUnit(num) {
    this.checkIsInteger(num);
    this.checkIsInteger(num);
    this.checkUnitRange(num);
    this.checkUnit(num);
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

  checkUnitRange(num) {
    if (num < 1 || num > 50000) throw new Error(ERROR.NOT_IN_RANGE_UNIT);
  }

  checkUnit(num) {
    if (num !== 1 && num % 10 !== 0) throw new Error(ERROR.NOT_UNIT);
  }
}

export default Validator;
