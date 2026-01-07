import { DAY } from '../constants/constants.js';
import { ERROR } from '../constants/constants.js';

const Validator = {
  validateDate(input) {
    const [month, day] = input;
    this.validateMonth(Number(month));
    this.validateDay(day);
  },

  validateMonth(input) {
    this.validateNumber(input);
    if (input < 1 || input > 12) throw new Error(ERROR.MONTH_IN_RANGE);
  },

  validateDay(input) {
    const arr = DAY;
    if (!arr.includes(input)) throw new Error(ERROR.DAY_IN_RANGE);
  },

  validateNumber(input) {
    if (Number.isNaN(input)) throw new Error(ERROR.NOT_A_NUMBER);
    if (!Number.isInteger(input)) throw new Error(ERROR.NOT_INTEGER);
  },
};

export default Validator;
