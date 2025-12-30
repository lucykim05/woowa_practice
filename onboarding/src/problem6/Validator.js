import { ERROR } from './Constants.js';

class Validator {
  //크루 수
  static validateNumber(input, num) {
    const [a, b] = input;
    if (a.length !== num || b.length !== num)
      throw new Error(ERROR.LENGTH_ERROR);
  }

  //닉네임 길이
  //닉네임 한글만
  //이메일 길이
  //이메일 형식
}

export default Validator;
