import { ERROR, BRIDGE_SIZE, MOVE } from "../constants.js";

export const Validator = {
  bridgeLength(value) {
    if (!value) throw Error(ERROR.EMPTY);
    const number = Number(value);
    if (!Number.isInteger(number)) throw Error(ERROR.NAN);
    if (number < BRIDGE_SIZE.MIN || number > BRIDGE_SIZE.MAX)
      throw Error(ERROR.OUT_OF_RANGE);
  },
  move(value) {
    if (!value) throw Error(ERROR.EMPTY);
    if (value !== MOVE.UP && value !== MOVE.DOWN)
      throw Error(ERROR.UNVALID_VALUE);
  },

  retry() {},
};
