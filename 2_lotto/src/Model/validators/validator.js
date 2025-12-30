import { TYPE, ERROR_MSG } from "../constants.js";
import { purchaseValidator } from "./purchaseValidator.js";
import { winningValidator } from "./winningValidator.js";
export const validator = (type, value) => {
  if (value.length === 0) throw Error(ERROR_MSG.EMPTY_VALUE);
  try {
    if (type === TYPE.PURCHASE) purchaseValidator(value);
    if (type === TYPE.WINNING) winningValidator(value);
  } catch (error) {
    throw Error(error.message);
  }
};
