import { ERROR } from '../constants/constants.js';

const Validator = {
  validateAmount(input) {
    this.validateNumber(input);
    if (input % 1000 !== 0) throw new Error('[ERROR]');
  },

  validateRandomNumbers(input) {
    input.forEach((x) => this.validateLottoNumber(x));
    const unique = [...new Set(input)];
    if (unique.length !== input.length) throw new Error('[ERROR]');
    if (input.length !== 6) throw new Error();
  },

  validateLottoNumbers(input) {
    input.forEach((x) => this.validateLottoNumber(x));
    const unique = [...new Set(input)];
    if (unique.length !== input.length) throw new Error('[ERROR]');
    if (input.length !== 6) throw new Error('[ERROR]');
  },

  validateBonusNumber(input, arr) {
    this.validateLottoNumber(input);
    if (arr.includes(input)) throw new Error('보너스');
  },
  validateNumber(input) {
    if (Number.isNaN(input)) throw Error(ERROR.NUMBER);
    if (!Number.isInteger(input)) throw new Error(ERROR.NUMBER);
    if (input < 1) throw new Error(ERROR.NUMBER);
  },

  validateLottoNumber(input) {
    this.validateNumber(input);
    if (input > 45) throw new Error();
  },
};

export default Validator;
