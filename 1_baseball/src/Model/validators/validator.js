import { TYPE } from "../../constants.js";
import { userGuessValidator } from "./userGuessValidator.js";
export const validator = (type, value) => {
  if (type === TYPE.GUESS) userGuessValidator(value);
};
