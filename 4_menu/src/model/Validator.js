import { ERROR } from '../constants/error.js';

export const InputValidator = {
  validateNames(input) {
    input.forEach((x) => {
      this.validateTotal(x);
      this.validateName(x);
    });
  },

  validateMenu(arr, menu) {
    this.validateMenuLength(arr);
    arr.forEach((x) => {
      this.checkIsMenu(x, menu);
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

  checkIsMenu(name, menu) {
    const filtered = menu.filter((x) => x.menuName === name);
    console.log(filtered);
    if (filtered.length === 0) throw new Error(ERROR.NOT_IN_MENU);
  },

  validateMenuLength(arr) {
    if (arr.length < 0 || arr.length > 2) throw new Error(ERROR.MENU_LENGTH);
  },
};

export const CategoryValidaotr = {
  validateUnique(num, arr) {
    const filtered = arr.filter((x) => x === num);
    if (filtered.length < 2) return true;
    return false;
  },
};
