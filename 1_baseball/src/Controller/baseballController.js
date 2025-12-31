import { GAME_START_MSG } from "../constants.js";
import { Computer } from "../Model/Computer.js";
import { printstartMsg } from "../View/output.js";
import { getUserGuess } from "../View/input.js";
export const baseballController = async () => {
  printstartMsg(GAME_START_MSG);

  while (true) {
    const computer = new Computer();
    const userGuess = await getUserInput();
  }
};

const getUserInput = async () => {
  const rawInput = await getUserGuess();
};
