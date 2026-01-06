import { Month } from "../Model/Month.js";
import { System } from "../Model/System.js";
import { Validator } from "../Model/Validator.js";
import { InputView } from "../View/InputView.js";
import { OutputView } from "../View/OutputView.js";

export const SystemController = {
  async start() {
    const [startMonth, day] = await this.getStartMonth(); //리턴값 [월, '요일']
    const month = new Month(startMonth);
    const system = new System(day, month);
  },

  async getStartMonth() {
    while (true) {
      try {
        const input = await InputView.startMonth();
        Validator.startMonth(input);
        return input;
      } catch (error) {
        OutputView.error(error);
      }
    }
  },

  async getWeeklyWorker() {
    while (true) {
      try {
        const input = await InputView.weeklyWorker();
        Validator.workers(input);
        return input;
      } catch (error) {
        OutputView.error(error);
      }
    }
  },

  async getHolidayWorker() {
    while (true) {
      try {
        const input = await InputView.holidayWorker();
        Validator.workers(input);
        return input;
      } catch (error) {
        OutputView.error(error);
      }
    }
  },
};
