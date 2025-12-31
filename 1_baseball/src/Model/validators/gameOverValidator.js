import { ERROR } from "../../constants.js";
export const gameOverValidator = (value) => {
  if (value.length === 0) throw Error(ERROR.SPACE);

  const number = Number(value);
  if (typeof number === NaN) throw Error(ERROR.STRING);
  if (number !== 1 && number !== 2) throw Error(ERROR.OUT_OF_RANGE);
};
