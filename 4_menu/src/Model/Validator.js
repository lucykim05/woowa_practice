import {
  CANT_EAT_LIMIT,
  COACH_LIMIT,
  COACH_NAME_LIMIT,
  ERROR,
  MENU_SAMPLE,
} from "../constants.js";
import { commaParser } from "../Utils/parser.js";
export const Validator = {
  coach(list) {
    if (list.length === 0) throw Error(ERROR.EMPTY);

    const parsedList = commaParser(list);
    if (
      parsedList.length < COACH_LIMIT.MIN ||
      parsedList.length > COACH_LIMIT.MAX
    )
      throw Error(ERROR.COACH_OUT_OF_RANGE);

    for (let i = 0; i < parsedList.length; i++) {
      const name = parsedList[i];
      if (
        name.length < COACH_NAME_LIMIT.MIN ||
        name.length > COACH_NAME_LIMIT.MAX
      )
        throw Error(ERROR.NAME_OUT_OF_RANGE);
    }
  },

  cantEat(list) {
    if (list.length === 0) return;

    const parsedList = commaParser(list);
    if (parsedList.length > CANT_EAT_LIMIT)
      throw Error(ERROR.MENU_OUT_OF_RANGE);

    for (let i = 0; i < parsedList.length; i++) {
      const menuExist = MENU_SAMPLE.filter((row) =>
        row.includes(parsedList[i])
      );
      if (menuExist.length === 0) throw Error(ERROR.MENU_NO_EXIST);
    }
  },
};
