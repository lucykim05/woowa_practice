import { LOTTO_PRICE, ERROR_MSG } from "../constants.js";
export const purchaseValidator = (value) => {
  const number = Number(value);

  if (!Number.isInteger(number)) throw Error(ERROR_MSG.INPUT_NAN);
  if (number < 0) throw Error(ERROR_MSG.NEGATIVE_NUMBER);
  if (number === 0) throw Error(ERROR_MSG.ZERO);
  if (number % LOTTO_PRICE !== 0) throw Error(ERROR_MSG.NOT_DIVISIBLE_NUMBER);
};
