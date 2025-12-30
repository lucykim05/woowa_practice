import { TYPE, ERROR_MSG } from "../../constants.js";
import { bonusValidator } from "./bonusValidator.js";
import { purchaseValidator } from "./purchaseValidator.js";
import { winningValidator } from "./winningValidator.js";
export const validator = (type, value, lottoGame = null) => {
  if (value.length === 0) throw Error(ERROR_MSG.EMPTY_VALUE);
  try {
    if (type === TYPE.PURCHASE) purchaseValidator(value);
    if (type === TYPE.WINNING) winningValidator(value);
    if (type === TYPE.BONUS) bonusValidator(value, lottoGame);
    value;
  } catch (error) {
    throw Error(error.message);
  }
};
