import { DATE } from '../constants/constants.js';

const Parser = {
  parseCalendarInfo(month, day) {
    const info = [];
    let total = DATE.DAY_MAP[day];
    for (let i = 0; i < DATE.MONTH[month]; i++) {
      const remain = total % 7;
      const dayName = DATE.DAY_NAME[remain];
      info.push(this.makeInfo(i, dayName, month));
      total++;
    }
    return info;
  },

  makeInfo(number, dayName, month) {
    const bool = DATE.WORKDAY.includes(dayName);
    const holiday = this.checkHoliday(month, number, bool);
    if (holiday) bool = false;
    return {
      month: month,
      date: number + 1,
      day: dayName,
      workday: bool,
      holiday: holiday,
    };
  },

  checkHoliday(month, number, bool) {
    if (!bool) return false;
    if (!DATE.HOLIDAY[month]) return false;
    if (DATE.HOLIDAY[month].includes(number)) return true;
    return false;
  },
};

export default Parser;
