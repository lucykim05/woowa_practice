import { ERROR, LOTTO } from "../constants.js";

export const Validator = {
  price(input) {
    //숫자 0이 아니면서 값이 올바르지 않은 것 검증
    if (!input && input !== 0) throw Error(ERROR.EMPTY);
    const number = Number(input);
    //숫자 정수인지 확인
    if (!Number.isInteger(number)) throw Error(ERROR.NAN);
    if (number < 0) throw Error(ERROR.NOT_POSITIVE);
    if (number % LOTTO.PRICE.MIN !== 0) throw Error(ERROR.NOT_DIVISIBLE);
    if (number > LOTTO.PRICE.MAX) throw Error(ERROR.LOTTO_PRICE_EXCEED);
  },

  lotto(numList) {
    if (numList.length !== LOTTO.COUNT)
      throw new Error(ERROR.LOTTO_OUT_OF_RANGE);

    const set = new Set(numList);
    if (set.size !== numList.length) throw Error(ERROR.LOTTO_SAME_NUM);

    for (const value of numList) {
      const number = Number(value);
      if (!number) throw Error(ERROR.EMPTY);
      if (number < LOTTO.RANGE.MIN || number > LOTTO.RANGE.MAX)
        throw Error(ERROR.NUMBER_OUT_OF_RANGE);
    }
  },

  bonusNum(winningNumArr, value) {
    if (!value) throw Error(ERROR.EMPTY);

    const number = Number(value);
    if (Number.isNaN(number)) throw Error(ERROR.NAN);
    if (number < LOTTO.RANGE.MIN || number > LOTTO.RANGE.MAX)
      throw Error(ERROR.NUMBER_OUT_OF_RANGE);
    if (winningNumArr.includes(value)) throw Error(ERROR.BONUS_SAME_NUM);
  },
};
