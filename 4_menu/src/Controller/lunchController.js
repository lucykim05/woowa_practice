import { LunchSystem } from "../Model/LunchSystem.js";
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
    } catch (error) {
      OutPutView.error(error);
    }
  }
};
