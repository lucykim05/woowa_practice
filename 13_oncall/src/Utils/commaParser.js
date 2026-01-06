import { DELIMITER } from "../constants.js";

export const commaParser = (string) => {
  return string.split(DELIMITER).map((v) => v.trim());
};
