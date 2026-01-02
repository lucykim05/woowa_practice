import { InputView } from "../View/InputView.js";
import { Validator } from "../Model/Validator.js";
import { OutputView } from "../View/OutputView.js";
export const ReadInput = {
  async coachList() {
    while (true) {
      try {
        const rawCoachList = await InputView.coachList();
        Validator.coach(rawCoachList);
        return rawCoachList;
      } catch (error) {
        OutputView.error(error);
      }
    }
  },
};
