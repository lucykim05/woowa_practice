import { ERROR } from '../constants/constants.js';

const Validator = {
  validateNames(input) {
    const result = input.map((x) => x.replace(/[^a-z]/g, ''));
    result.forEach((x) => {
      if (x === '') throw new Error(ERROR.NAME);
    });
  },

  validateCount(input) {
    if (Number.isNaN(input)) throw new Error(ERROR.NUMBER);
    if (!Number.isInteger(input)) throw new Error(ERROR.NUMBER);
    if (input < 1) throw new Error(ERROR.NUMBER);
  },
};

export default Validator;
