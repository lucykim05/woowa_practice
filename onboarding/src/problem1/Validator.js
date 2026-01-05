class Validator {
  static validate(input) {
    this.checkEmpty(input);

    input.forEach((num) => {
      this.checkIsNumber(num);
      this.checkRange(num);
    });

    return input;
  }

  static checkEmpty(input) {
    if (input.length !== 2)
      throw new Error('[ERROR] 페이지 수가 2개가 아닙니다.');
  }

  static checkIsNumber(num) {
    if (isNaN(num)) throw new Error('[ERROR] 숫자가 아닙니다.');
  }

  static checkRange(num) {
    if (num <= 2 || num >= 399)
      throw new Error('[ERROR] 범위 내의 숫자가 아닙니다.');
  }
}

export default Validator;
