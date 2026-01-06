import { ERROR } from '../constants/error.js';
import Menu from './menu.js';

export const InputValidator = {
  validateNames(input) {
    input.forEach((x) => {
      this.validateTotal(x);
      this.validateName(x);
    });
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

  validateName(input) {
    if (input.length < 2 || input.length > 4)
      throw new Error(ERROR.COACH_NAMES);
    if (input.replace(/^[가-힣]+$/g, '') !== '')
      throw new Error(ERROR.NAME_KOREAN);
  },

  checkIsMenu(menu) {
    const filtered = Menu.filter((x) => x.menuName === menu);
    if (filtered.length === 0) throw new Error(ERROR.NOT_IN_MENU);
  },

  validateMenuLength(arr) {
    if (arr.length < 0 || arr.length > 2) throw new Error(ERROR.MENU_LENGTH);
  },
};

export const CategoryValidaotr = {};
