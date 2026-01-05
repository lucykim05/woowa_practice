const Validator = {
  validateCustom(input) {
    this.validateNaN(input);
    this.validateEmpty(input);
    this.validaeLength(input);
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
};

export default Validator;
