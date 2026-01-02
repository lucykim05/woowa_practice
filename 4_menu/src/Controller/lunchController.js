import { Coach } from "../Model/Coach.js";
import { ReadInput } from "./ReadInput.js";
export const lunchController = async (SAMPLE) => {
  const coachInstanceList = await getCoachList();
};

const getCoachList = async () => {
  const coachList = await ReadInput.coachList();

  const coachInstanceList = [];
  for (let i = 0; i < coachList.length; i++) {
    const coach = new Coach(coachList[i]);
    const dontEatList = await ReadInput.dontEat(coachList[i]);
    coach.saveDontEat(dontEatList);
    coachInstanceList.push(coach);
  }

  return coachInstanceList;
};
