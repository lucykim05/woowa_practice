import { DAY_NAME_LIST } from "../constants.js";

export const DateInfo = {
  getYear() {
    const today = new Date();
    const year = today.getFullYear();
    return year;
  },

  getMonth() {
    const today = new Date();
    const month = today.getMonth() + 1;
    return month.toString().padStart(2, "0");
  },

  getDayNumber() {
    const today = new Date();
    const day = today.getDate();
    return day.toString().padStart(2, "0");
  },

  getDayName() {
    const dayName = DAY_NAME_LIST[new Date().getDay()];
    return dayName;
  },
};
