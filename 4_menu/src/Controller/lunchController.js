import { Coach } from "../Model/Coach.js";
import { RecommendSystem } from "../Model/RecommendSystem.js";
import { OutputView } from "../View/OutputView.js";
import { ReadInput } from "./ReadInput.js";
import { OUTPUT_MSG } from "../constants.js";

export const lunchController = async (menuList) => {
  const coachInstanceList = await getCoachList(menuList);
  const system = new RecommendSystem(coachInstanceList, menuList);
  system.recommendProcess();
  printResult(coachInstanceList, system);
};

const getCoachList = async (menuList) => {
  const coachList = await ReadInput.coachList();

  const coachInstanceList = [];
  for (let i = 0; i < coachList.length; i++) {
    const coach = new Coach(coachList[i]);
    const dontEatList = await ReadInput.dontEat(coachList[i], menuList);
    coach.saveDontEat(dontEatList);
    coachInstanceList.push(coach);
  }

  return coachInstanceList;
};

const printResult = (coachInstanceList, system) => {
  OutputView.showResultMsg();

  const categories = [OUTPUT_MSG.CATEGORY, ...system.getCategories()];
  OutputView.result(categories);

  coachInstanceList.forEach((coach) => {
    const menuList = [coach.getName(), ...coach.getMenu()];
    OutputView.result(menuList);
  });

  OutputView.endingMsg();
};
