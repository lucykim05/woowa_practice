import { Parser } from "../Model/Parser.js";
import { AttendanceValidator } from "../Model/Validators/AttendanceValidator.js";
import { InputView } from "../View/InputView.js";

export const AttendanceController = {
  async process() {
    try {
      AttendanceValidator.validDate(); //공휴일, 주말 검증
      const name = await this.getInput();
      const [hour, minute] = await this.getTime();
    } catch (error) {
      throw Error(error.message);
    }
  },

  async getInput() {
    while (true) {
      try {
        const rawName = await InputView.name();
        AttendanceValidator.validName(rawName);
        return rawName;
      } catch (error) {
        throw Error(error.message);
      }
    }
  },

  async getTime() {
    while (true) {
      try {
        const rawTime = await InputView.time();
        const [hour, minute] = Parser.parse(rawTime, ":").map(Number);
        AttendanceValidator.validTime(hour, minute);
        return hour, minute;
      } catch (error) {
        throw Error(error.message);
      }
    }
  },
};
