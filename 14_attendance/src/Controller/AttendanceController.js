import { AttendanceValidator } from "../Model/Validators/AttendanceValidator.js";
import { InputView } from "../View/InputView.js";
import { OutputView } from "../View/OutputView.js";

export const AttendanceController = {
  async process() {
    try {
      AttendanceValidator.isValidDate();
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
        return rawName;
      } catch (error) {
        OutputView.error;
        return;
      }
    }
  },
};
