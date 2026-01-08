import { DateInfo } from "../../Utils/DateInfo.js";
import { ERROR } from "../../constants.js";

export const AttendanceValidator = {
  isValidDate() {
    const dayName = DateInfo.getDayName();
    const dateString = DateInfo.getDateAsString();

    if (dayName === "토" || dayName === "일")
      throw Error(`[ERROR] ${dateString}${ERROR.HOLIDAY}`);

    const date = DateInfo.getDayNumber();
    if (date === "25") throw Error(`[ERROR] ${dateString}${ERROR.HOLIDAY}`);
  },
};
