import { DAY_NAME_LIST } from "../constants";

export const Date = {
  getYear() {
    const today = new Date();
    const year = today.getFullYear();
    return year;
  },

  getMonth() {
    const today = new Date();
    const month = today.getMonth();
    return month.toString().padStart(2, "0");
  },

  getDay() {
    const today = new Date();
    const day = today.getDay();
    return day.toString().padStart(2, "0");
  },

  getDayName() {
    const year = this.getYear();
    const month = this.getMonth();
    const day = this.getDay();
    const date = `${year}-${month}-${day}`;
    const dayName = DAY_NAME_LIST[new Date(date).getDay()];
    return dayName;
  },
};
