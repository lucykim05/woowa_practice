const Validator = {
  validateAmount(input) {
    this.validateNumber(input);
    if (input % 1000 !== 0) throw new Error('금액');
  },

  validateRandomNumbers(input) {
    input.forEach((x) => x.validateLottoNumber());
    const unique = [...new Set(input)];
    if (unique.length !== input.length) throw new Error('당첨');
  },

  validateBonusNumber(input, arr) {
    this.validateLottoNumber(input);
    if (arr.includes(input)) throw new Error('보너스');
  },
  validateNumber(input) {
    if (Number.isNaN(input)) throw new Error(ERROR.NUMBER);
    if (!Number.isInteger(input)) throw new Error(ERROR.NUMBER);
    if (input < 1) throw new Error(ERROR.NUMBER);
  },

  validateLottoNumber(input) {
    this.validateNumber(input);
    if (input > 45) throw new Error();
  },
};

export default Validator;
