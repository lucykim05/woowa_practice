import { AttendanceValidator } from "../Model/Validators/AttendanceValidator.js";
import { InputView } from "../View/InputView.js";
import { OutputView } from "../View/OutputView.js";

export const AttendanceController = {
  async process() {
    try {
      AttendanceValidator.validDate(); //공휴일, 주말 검증
      const name = await this.getInput();
    } catch (error) {
      OutputView.error(error);
      return;
    }
  },

  async getInput() {
    while (true) {
      try {
        const rawName = await InputView.name();
        AttendanceValidator.validName(rawName);
        AttendanceValidator.validName(rawName);
        return rawName;
      } catch (error) {
        OutputView.error(error);
        OutputView.error(error);
        return;
      }
    }
  },
};
