import { COACH_LIMIT, COACH_NAME_LIMIT, ERROR } from "../constants.js";
import { commaParser } from "../Utils/parser.js";
export const Validator = {
  coach(list) {
    if (list.length === 0) throw Error(ERROR.EMPTY);

    const parsedList = commaParser(list);
    if (
      parsedList.length < COACH_LIMIT.MIN ||
      parsedList.length > COACH_LIMIT.MAX
    )
      throw Error(ERROR.COUNT_OUT_OF_RANGE);

    for (let i = 0; i < parsedList.length; i++) {
      const name = parsedList[i];
      if (
        name.length < COACH_NAME_LIMIT.MIN ||
        name.length > COACH_NAME_LIMIT.MAX
      )
        throw Error(ERROR.NAME_OUT_OF_RANGE);
    }
  },
  cantEat() {},
};
