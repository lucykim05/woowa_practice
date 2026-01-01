import { TYPE } from "../../constants.js";
import { userGuessValidator } from "./userGuessValidator.js";
import { gameOverValidator } from "./gameOverValidator.js";
export const validator = (type, value) => {
  if (type === TYPE.GUESS) userGuessValidator(value);
  if (type === TYPE.GAMEOVER) gameOverValidator(value);
};
