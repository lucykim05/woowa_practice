const Validator = {
  validateCustom(input) {
    this.validateNaN(input);
    this.validateEmpty(input);
    this.validateLength(input);
  },

  validateInput(input) {
    this.validateNumber(input);
  },

  validateNaN(input) {
    if (!Number.isNaN(Number(input)))
      throw new Error('[ERROR] 커스텀 구분자로 숫자 불가능');
  },

  validateEmpty(input) {
    if (input === ' ')
      throw new Error('[ERROR] 커스텀 구분자 공백 사용 불가능');
  },

  validateLength(input) {
    if (input.length !== 1)
      throw new Error('[ERROR] 적절하지 않은 커스텀 구분자');
  },

  validateNumber(input) {
    if (Number.isNaN(Number(input))) throw new Error('[ERROR] 숫자아님');
    if (!Number.isInteger(Number(input))) throw new Error('[ERROR] 정수 아님');
    if (Number(input) < 0) throw new Error('[ERROR] 음수');
  },
};

export default Validator;
