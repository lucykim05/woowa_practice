import { DAY_OF_WEEK, ERROR, MONTH_LIMIT } from "../constants.js";
import { commaParser } from "../Utils/commaParser.js";

export const Validator = {
  startMonth(input) {
    const [month, startDay] = commaParser(input);
    if (!input || !month || !startDay) throw Error(ERROR.EMPTY);
    if (Number(month) < MONTH_LIMIT.MIN || Number(month) > MONTH_LIMIT.MAX)
      throw Error(ERROR.MONTH_OUT_OF_RANGE);
    if (!DAY_OF_WEEK.includes(startDay)) throw Error(ERROR.UNVALID_STARTDAY);
  },

  workers() {},
};
