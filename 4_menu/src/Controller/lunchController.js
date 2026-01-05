import { LunchSystem } from "../Model/LunchSystem.js";
import { Validator } from "../Model/Validator.js";
import { commaParser } from "../Utils/parser.js";
import { InputView } from "../View/InputView.js";
import { OutPutView } from "../View/OutputView.js";

export const lunchController = async () => {
  OutPutView.start();
  const lunchSystem = new LunchSystem();

  const coachList = await getCoachList();
  lunchSystem.saveCoach(coachList);
  await saveCantEat(coachList, lunchSystem);

  lunchSystem.recommend();
};

const getCoachList = async () => {
  while (true) {
    try {
      const list = await InputView.coach();
      Validator.coach(list);
      return commaParser(list);
    } catch (error) {
      OutPutView.error(error);
    }
  }
};

const getCantEat = async (coach) => {
  while (true) {
    try {
      const cantEatList = await InputView.cantEat(coach);
      Validator.cantEat(cantEatList);
      return commaParser(cantEatList);
    } catch (error) {
      OutPutView.error(error);
    }
  }
};

const saveCantEat = async (coachList, lunchSystem) => {
  const cantEatList = [];
  for (let i = 0; i < coachList.length; i++) {
    const cantEat = await getCantEat(coachList[i]);
    cantEatList.push(cantEat);
  }

  lunchSystem.saveCantEat(cantEatList);
};
