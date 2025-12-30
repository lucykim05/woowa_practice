import { DELIMITER } from "../constants.js";
export const winningNumParser = (numbers) => {
  return numbers.split(DELIMITER).map(Number);
};
