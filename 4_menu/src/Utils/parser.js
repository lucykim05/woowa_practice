import { PARSING_DELIMITER } from "../constants.js";
export const commaParser = (msg) => {
  return msg.split(PARSING_DELIMITER).map((v) => v.trim());
};
