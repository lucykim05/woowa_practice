import { Coach } from "../Model/Coach.js";
import { RecommendSystem } from "../Model/RecommendSystem.js";
import { ReadInput } from "./ReadInput.js";
export const lunchController = async (menuList) => {
  const coachInstanceList = await getCoachList(menuList);
  const system = new RecommendSystem(coachInstanceList, menuList);
  system.recommendProcess(menuList);
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
