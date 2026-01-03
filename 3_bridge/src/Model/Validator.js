import { ERROR, BRIDGE_SIZE } from "../constants.js";

export const Validator = {
  bridgeLength(value) {
    if (value.length === 0) throw Error(ERROR.EMPTY);
    const number = Number(value);
    if (!Number.isInteger(number)) throw Error(ERROR.NAN);
    if (number < BRIDGE_SIZE.MIN || number > BRIDGE_SIZE.MAX)
      throw Error(ERROR.OUT_OF_RANGE);
  },
  move() {},
  retry() {},
};
