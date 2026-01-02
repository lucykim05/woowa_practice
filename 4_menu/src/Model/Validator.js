import {
  ERROR_MSG,
  COACH_COUNT,
  COACH_NAME_LIMIT,
  MENU_LIMIT,
} from "../constants.js";

export const Validator = {
  coach(list) {
    if (list.length === 0) throw Error(ERROR_MSG.EMPTY);
    if (list.length < COACH_COUNT.MIN || list.length > COACH_COUNT.MAX)
      throw Error(ERROR_MSG.COACH_COUNT_OUT_OF_RANGE);

    for (let i = 0; i < list.length; i++) {
      if (
        list[i].length < COACH_NAME_LIMIT.MIN ||
        list[i].length > COACH_NAME_LIMIT.MAX
      )
        throw Error(ERROR_MSG.NAME_OUT_OF_RANGE);
    }
  },

  menu(list) {
    if (list.length > MENU_LIMIT.MAX)
      throw Error(ERROR_MSG.MENU_COUNT_OUT_OF_RANGE);
  },
};
