import IdValidator from './IdValidator.js';

class VisitorValidator {
  static validateVisitor(input) {
    this.#checkLength(input);
    input.forEach((x) => IdValidator.validateId(x));
    return input;
  }

  static #checkLength(input) {
    if (input.length < 0 || input.length > 10000)
      throw new Error('[ERROR] 방문객 배열은 10000 이하로 입력 가능합니다.');
  }
}

export default VisitorValidator;
