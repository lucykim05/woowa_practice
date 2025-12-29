class Validator {
  static validate(message) {
    this.checkLength(message);
    this.checkString(message);
  }

  static checkLength(message) {
    if (message.length >= 1 && message.length <= 1000) {
      return message;
    } else {
      throw new Error('[ERROR] 작성된 문자의 길이가 알맞지 않습니다.');
    }
  }

  static checkString(message) {
    for (const str of message) {
      if ('a' <= str && str <= 'z') {
        continue;
      } else {
        throw new Error('[ERROR] 알파멧 소문자로만 문자를 작성할 수 있습니다.');
      }
    }
  }
}

export default Validator;
