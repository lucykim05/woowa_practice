import { DateInfo } from "../../Utils/DateInfo.js";
import { ERROR, HOUR, MINUTE } from "../../constants.js";
import { Info } from "../Info.js";

export const AttendanceValidator = {
  validDate() {
    const dayName = DateInfo.getDayName();
    const dateString = DateInfo.getDateAsString();

    if (dayName === "토" || dayName === "일")
      throw Error(`[ERROR] ${dateString}${ERROR.HOLIDAY}`);

    const date = DateInfo.getDayNumber();
    if (date === "25") throw Error(`[ERROR] ${dateString}${ERROR.HOLIDAY}`);
  },

  validName(name) {
    const nameList = Object.keys(Info);
    if (!nameList.includes(name)) throw Error(ERROR.NAME);
  },

  validTime(hour, minute) {
    if (hour < HOUR.MIN || hour > HOUR.MAX) throw Error(ERROR.WRONG);
    if (minute < MINUTE.MIN || minute > MINUTE.MAX) throw Error(ERROR.WRONG);
  },
};
