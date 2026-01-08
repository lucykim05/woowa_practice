import { Parser } from "../Model/Parser.js";
import { AttendanceValidator } from "../Model/Validators/AttendanceValidator.js";
import { DateInfo } from "../Utils/DateInfo.js";
import { InputView } from "../View/InputView.js";
import { OutputView } from "../View/OutputView.js";
import { saveData } from "./SystemController.js";
import { Info } from "../Model/Info.js";

export const AttendanceController = {
  async process() {
    try {
      AttendanceValidator.validDate(); //공휴일, 주말 검증
      const name = await this.getInput();
      const [hour, minute] = await this.getTime();
      this.save(name, hour, minute);
      this.printMsg(name, hour, minute);
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
        const [hour, minute] = Parser.parse(rawTime, ":");
        AttendanceValidator.validTime(Number(hour), Number(minute));
        return [Number(hour), Number(minute)];
      } catch (error) {
        console.log(error);

        throw Error(error.message);
      }
    }
  },

  save(name, hour, minute) {
    const year = DateInfo.getYear();
    const month = DateInfo.getMonth();
    const day = DateInfo.getDayNumber();
    const msg = `${name},${year}-${month}-${day} ${hour}:${minute}`;
    saveData([msg]);
  },

  printMsg(name, hour, minute) {
    const dateString = DateInfo.getDateAsString();
    const recentData = Info[name][Info[name].length - 1];
    const msg = `${dateString} ${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")} (${recentData.STATUS})`;
    OutputView.attendance(msg);
  },
};
