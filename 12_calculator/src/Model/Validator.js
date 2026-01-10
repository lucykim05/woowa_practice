import { ERROR } from "../constants.js";

export const Validator = {
  number(input) {
    if (!input && input !== 0) throw Error(ERROR.EMPTY);

    for (const value of input) {
      const number = Number(value);
      //숫자 정수인지 확인
      if (!Number.isInteger(number)) throw Error("[ERROR] 정수아님");
      //숫자로 형변환 시 오류가 남 = 숫자가 아님
      if (Number.isNaN(Number(number))) throw Error("[ERROR] 숫자 아님");
      if (number < 0) throw Error("[ERROR] 음수임");
    }
  },
};
