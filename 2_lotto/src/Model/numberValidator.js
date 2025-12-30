import { ERROR_MSG } from "../constants.js";
export const numberValidator = (number) => {
  if (!Number.isInteger(number)) throw Error(ERROR_MSG.INPUT_NAN);
  if (number < 0) throw Error(ERROR_MSG.NEGATIVE_NUMBER);
  if (number === 0) throw Error(ERROR_MSG.ZERO);
};
