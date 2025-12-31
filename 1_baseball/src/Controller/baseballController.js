import { GAME_START_MSG } from "../constants.js";

import { Computer } from "../Model/Computer.js";
import { userInputParser } from "../Model/parser.js";

import { getUserGuess } from "../View/input.js";
import { printstartMsg } from "../View/output.js";

export const baseballController = async () => {
  printstartMsg(GAME_START_MSG);

  while (true) {
    const computer = new Computer();
    const userGuess = await getUserInput();
  }
};

const getUserInput = async () => {
  const rawInput = await getUserGuess();
  const parsedInput = userInputParser(rawInput);
};
