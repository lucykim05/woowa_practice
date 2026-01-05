import { LunchSystem } from "../Model/LunchSystem.js";
import { Validator } from "../Model/Validator.js";
import { InputView } from "../View/InputView.js";
import { OutPutView } from "../View/OutputView.js";

export const lunchController = async () => {
  OutPutView.start();
  const lunchSystem = new LunchSystem();

  const coachList = await getCoachList();
};

export const getCoachList = async () => {
  while (true) {
    try {
      const list = await InputView.coach();
      Validator.coach(list);
      return list;
    } catch (error) {
      OutPutView.error(error);
    }
  }
};
