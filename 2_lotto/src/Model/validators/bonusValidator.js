import { ERROR_MSG, LOTTO_NUMBER } from "../../constants.js";
import { numberValidator } from "./numberValidator.js";
export const bonusValidator = (value, lottoGame) => {
  if (lottoGame === null) throw Error(ERROR_MSG.UNKNOWN_ERROR);
  const number = Number(value);

  if (number < LOTTO_NUMBER.MIN || number > LOTTO_NUMBER.MAX)
    throw Error(ERROR_MSG.OUT_OF_RANGE);
  numberValidator(number);

  const winningNum = lottoGame.getWinningNumbers();
  if (winningNum.includes(number)) throw Error(ERROR_MSG.SAME_NUMBER);
};
