import { DATE } from '../constants/constants.js';
import { ERROR } from '../constants/constants.js';

const Validator = {
  validateDate(input) {
    const [month, day] = input;
    this.validateMonth(Number(month));
    this.validateDay(day);
  },

  validateSchedule(workDay, weekDay) {
    this.validateDaySchedule(workDay);
    this.validateDaySchedule(weekDay);
  },

  validateDaySchedule(arr) {
    this.validateUnique(arr);
    this.validateLength(arr);
    arr.forEach((x) => this.validateName(x));
  },

  validateUnique(arr) {
    const unique = [...new Set(arr)];
    if (unique.length !== arr.length) throw new Error(ERROR.NOT_UNIQUE);
  },

  validateLength(arr) {
    const len = arr.length;
    if (len < 5 || len > 35) throw new Error(ERROR.WORKER_LENGTH);
  },

  validateName(name) {
    this.validateKorean(name);
    this.validateNameLength(name);
  },

  validateKorean(name) {
    const filtered = name.replace(/[^가-힣]/g, '');
    if (filtered !== name) throw new Error(ERROR.NOT_KOREAN);
  },

  validateNameLength(name) {
    if (name.length < 1 || name.length > 5) throw new Error(ERROR.NAME_RANGE);
  },

  validateMonth(input) {
    this.validateNumber(input);
    if (input < 1 || input > 12) throw new Error(ERROR.MONTH_IN_RANGE);
  },

  validateDay(input) {
    const arr = DATE.DAY_NAME;
    if (!arr.includes(input)) throw new Error(ERROR.DAY_IN_RANGE);
  },

  validateNumber(input) {
    if (Number.isNaN(input)) throw new Error(ERROR.NOT_A_NUMBER);
    if (!Number.isInteger(input)) throw new Error(ERROR.NOT_INTEGER);
  },
};

export default Validator;
