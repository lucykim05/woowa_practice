import { Console } from "@woowacourse/mission-utils";
import { DEFAULT_MSG } from "../constants.js";

export const InputView = {
  async startMonth() {
    return await Console.readLineAsync(DEFAULT_MSG.START_MONTH);
  },

  async weeklyWorker() {
    return await Console.readLineAsync(DEFAULT_MSG.WEEKLY_WORKERS);
  },

  async holidayWorker() {
    return await Console.readLineAsync(DEFAULT_MSG.HOLIDAY_WORKERS);
  },
};
