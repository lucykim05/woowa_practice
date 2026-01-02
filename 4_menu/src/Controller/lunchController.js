import { ReadInput } from "./ReadInput.js";
export const lunchController = async (SAMPLE) => {
  await initializeSystem();
};

const initializeSystem = async () => {
  const coachList = await ReadInput.coachList();
};
