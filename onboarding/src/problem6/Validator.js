import { ERROR } from './Constants.js';

class Validator {
  //크루 수
  static validateNumber(input, num) {
    const [a, b] = input;
    if (a.length !== num || b.length !== num)
      throw new Error(ERROR.LENGTH_ERROR);
  }

  static validateNum(num) {
    if (Number.isNaN(num)) throw new Error(ERROR.NOT_A_NUMBER);
    if (!Number.isInteger(num)) throw new Error(ERROR.NOT_INTEGER);
    if (num < 1 || num > 10000) throw new Error(ERROR.NUMBER_ERROR);
  }

  validateName(input) {
    this.validateNameLength(input);
    this.validateNameKor(input);
  }

  validateEmail(input) {
    this.validateEmailLength(input);
    this.validateEmailForm(input);
  }

  //닉네임 길이
  validateNameLength(input) {
    if (input.length < 1 || input.length >= 20)
      throw new Error(ERROR.NAME_LENGTH);
  }

  //닉네임 한글만
  validateNameKor(input) {
    const regex = /^[가-힣]+$/;
    if (!regex.test(input)) throw new Error(ERROR.NOT_KOR);
  }

  //이메일 길이
  validateEmailLength(input) {
    if (input.length < 11 || input.length >= 20)
      throw new Error(ERROR.EMAIL_LENGTH);
  }

  //이메일 형식
  validateEmailForm(input) {
    const len = input.length;
    if (!input.includes('@email.com') || input[len - 10] !== '@')
      throw new Error(ERROR.NOT_RIGHT_FORM);
  }
}

export default Validator;
