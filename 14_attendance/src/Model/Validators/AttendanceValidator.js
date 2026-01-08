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
    if (!name) throw Error(ERROR.EMPTY);
    const nameList = Object.keys(Info);
    if (!nameList.includes(name)) throw Error(ERROR.NAME);
    if (isAlreadyFinished(name)) throw Error(ERROR.ATTENDANCE_DONE);
  },

  validTime(hour, minute) {
    if (!hour || !minute) throw Error(ERROR.EMPTY);

    if (hour < HOUR.MIN || hour > HOUR.MAX) throw Error(ERROR.WRONG);
    if (minute < MINUTE.MIN || minute > MINUTE.MAX) throw Error(ERROR.WRONG);
  },
};

const isAlreadyFinished = (name) => {
  const recentData = Info[name][Info[name].length - 1];
  const day = DateInfo.getDayNumber();
  if (recentData.DATE.DAY === day) return true;
  return false;
};
