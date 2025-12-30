import { LOTTO_NUMBER_COUNT, ERROR_MSG } from "../constants.js";
import { numberValidator } from "./numberValidator.js";
export const winningValidator = (value) => {
  if (value.length !== LOTTO_NUMBER_COUNT) throw Error(ERROR_MSG.UNVALID_COUNT);

  const sortedValue = value.sort((a, b) => a - b);
  const set = new Set(sortedValue);
  if (sortedValue.length !== set.size) throw Error(ERROR_MSG.SAME_NUMBER);

  value.forEach((number) => {
    numberValidator(number);
    if (number < 1 || number > 45) throw Error(ERROR_MSG.OUT_OF_RANGE);
  });
};
