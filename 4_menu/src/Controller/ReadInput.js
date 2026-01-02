import { InputView } from "../View/InputView.js";
import { Validator } from "../Model/Validator.js";
import { OutputView } from "../View/OutputView.js";
export const ReadInput = {
  async coachList() {
    while (true) {
      try {
        const coachList = await InputView.coachList();
        Validator.coach(coachList);
        return coachList;
      } catch (error) {
        OutputView.error(error);
      }
    }
  },

  async dontEat(coach, menuList) {
    while (true) {
      try {
        const dontEatList = await InputView.dontEat(coach);
        Validator.menu(dontEatList, menuList);
        return dontEatList;
      } catch (error) {
        OutputView.error(error);
      }
    }
  },
};
