import { NUMBER, ERROR } from "../../constants.js";
export const userGuessValidator = (value) => {
  if (value.length !== NUMBER.LENGTH) throw Error(ERROR.UNVALID_LENGTH);

  for (let i = 0; i < NUMBER.LENGTH; i++) {
    if (value[i].length === 0) throw Error(ERROR.SPACE);

    const number = Number(value[i]);
    if (Number.isNaN(number)) throw Error(ERROR.STRING);
    if (number < 1 || number > 9) throw Error(ERROR.OUT_OF_RANGE);
  }

  const set = new Set(value);
  if (set.size !== value.length) throw Error(ERROR.SAME_NUMBER);
};
