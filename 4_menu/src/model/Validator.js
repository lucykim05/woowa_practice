import { ERROR } from '../constants/error.js';
import Menu from './menu.js';

export const InputValidator = {
  validateNames(input) {
    this.validateTotal(input);
    this.validateNames(input);
  },

  validateMenu(arr) {
    this.validateMenuLength(arr);
    arr.forEach((x) => {
      this.checkIsMenu(x);
    });
  },

  validateTotal(input) {
    if (input.length < 2 || input.length > 5)
      throw new Error(ERROR.COACH_LENGTH);
  },

  validateNames(input) {
    input.split(',').forEach((x) => {
      if (x.length < 2 || x.length > 4) throw new Error(ERROR.COACH_NAMES);
      if (!x.match(/^[가-힣]+$/)) throw new Error(ERROR.NAME_KOREAN);
    });
  },

  checkIsMenu(menu) {
    const filtered = Menu.filter((x) => x.name === menu);
    if (filtered.length === 0) throw new Error(ERROR.NOT_IN_MENU);
  },

  validateMenuLength(arr) {
    if (arr.length < 0 || arr.length > 2) throw new Error(ERROR.MENU_LENGTH);
  },
};

export const CategoryValidaotr = {};
