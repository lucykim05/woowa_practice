import { ERROR } from '../constants/error.js';
import { Menu } from './Menu.js';

const Validator = {
  validateOrder(order) {
    order.forEach((x) => {
      this.validateArr(x);
      this.validateName(x[0]);
      this.validateNumber(x[1]);
    });
  },

  validateArr(input) {
    const filtered = input.filter((x) => x !== '');
    if (filtered.length !== 2) throw new Error(ERROR.MENU);
  },

  validateNumber(input) {
    if (Number.isNaN(Number(input))) throw new Error(ERROR.MENU);
    if (!Number.isInteger(Number(input))) throw new Error(ERROR.MENU);
  },

  validateName(input) {
    const regex = /^[가-힣]+$/;
    if (!regex.test(input)) throw new Error(ERROR.MENU);
  },

  validateUnique(order) {
    const arr = [];
    order.forEach((x) => arr.push(x.name));
    const unique = [...new Set(arr)];
    if (arr.length !== unique.length) throw new Error(ERROR.MENU);
  },

  validateMenu(order) {
    order.forEach((x) => {
      console.log(x);
      const filtered = Menu.filter((y) => y.name === x.name);
      console.log(filtered);
      if (filtered.length === 0) throw new Error(ERROR.MENU);
    });
  },
};

export default Validator;
