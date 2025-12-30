class Validator {
  validate(input) {
    this.validateLength(input);
    this.validateString(input);
  }

  validateLength(input) {
    if (input.length < 1 || input.length > 1000)
      throw new Error(
        '[ERROR] 문장의 길이는 1 이상 1,000 이하로 입력해주세요.'
      );
  }

  validateString(input) {
    for (const word of input) {
      if (
        word === ' ' ||
        (word >= 'a' && word <= 'z') ||
        (word >= 'A' && word <= 'Z')
      ) {
        continue;
      } else {
        throw new Error('[ERROR] 문장은 알파벳과 공백으로만 이루어져야합니다.');
      }
    }
  }
}

export default Validator;
