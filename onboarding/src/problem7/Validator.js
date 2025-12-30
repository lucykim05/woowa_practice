class Validator {
  static validateId(id) {
    this.#checkLength(id);
    this.#checkLowerCase(id);
  }

  static #checkLength(id) {
    if (id.length < 1 || id.length > 30)
      throw new Error('[ERROR] 아이디 길이는 1 이상 30 이하로 입력해주세요.');
  }

  static #checkLowerCase(id) {
    const regex = /^[a-z]+&/;
    if (!regex.test(id))
      throw new Error('[ERROR] 아이디는 알파벳 소문자로만 구성 가능합니다.');
  }
}

export default Validator;
