import { ReadInput } from "./ReadInput.js";
export const lunchController = async (SAMPLE) => {
  await initializeSystem();
};

const initializeSystem = async () => {
  const coachList = await ReadInput.coachList();

  for (let i = 0; i < coachList.length; i++) {
    const dontEatList = await ReadInput.dontEat(coachList[i]);
  }
};
