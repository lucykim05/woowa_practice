import { Console } from "@woowacourse/mission-utils";
import { USER_GUESS_MSG } from "../constants.js";

export const getUserGuess = async () => {
  return await Console.readLineAsync(USER_GUESS_MSG);
};
