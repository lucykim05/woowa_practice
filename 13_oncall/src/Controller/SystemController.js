import { TYPE } from "../constants.js";
import { Month } from "../Model/Month.js";
import { System } from "../Model/System.js";
import { Validator } from "../Model/Validator.js";
import { commaParser } from "../Utils/commaParser.js";
import { InputView } from "../View/InputView.js";
import { OutputView } from "../View/OutputView.js";

export const SystemController = {
  async start() {
    const [startMonth, day] = await this.getStartMonth(); //리턴값 [월, '요일']
    const month = new Month(startMonth);
    const system = new System(day, month);

    const weeklyWorkerInput = await this.getWeeklyWorker();
    const weeklyWorker = new Worker(TYPE.WEEKLY, weeklyWorkerInput);

    const holidayWorkerInput = await this.getHolidayWorker();
    const holidayWorker = new Worker(TYPE.HOLIDAY, holidayWorkerInput);

    system.saveWorkers(weeklyWorker, holidayWorker);
  },

  async getStartMonth() {
    while (true) {
      try {
        const input = await InputView.startMonth();
        Validator.startMonth(input);
        return commaParser(input);
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
        return commaParser(input);
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
        return commaParser(input);
      } catch (error) {
        OutputView.error(error);
      }
    }
  },
};
