import { ERROR } from '../constants/error.js';

export const InputValidator = {
  validateNames(input) {
    this.validateTotal(input);
    this.validateNames(input);
  },

  validateTotal(input) {
    if (input.length < 2 || input.length > 5)
      throw new Error(ERROR.COACH_LENGTH);
  },

  validateNames(input) {
    console.log(input);
    input.split(',').forEach((x) => {
      if (x.length < 2 || x.length > 4) throw new Error(ERROR.COACH_NAMES);
      if (!x.match(/^[가-힣]+$/)) throw new Error(ERROR.NAME_KOREAN);
    });
  },
};

export const CategoryValidaotr = {};
