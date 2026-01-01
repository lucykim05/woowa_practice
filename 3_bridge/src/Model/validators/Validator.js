import { ERROR, BRIDGE_LENGTH } from "../../constants.js";
export const Validator = {
  bridgeSize(input) {
    if (input.length === 0) throw Error(ERROR.EMPTY);
    const number = Number(input);
    if (!Number.isInteger(number)) throw Error(ERROR.NAN);
    if (number < BRIDGE_LENGTH.MIN || number > BRIDGE_LENGTH.MAX)
      throw Error(ERROR.OUT_OF_RANGE);
  },
  move() {},
  roundOver() {},
};
