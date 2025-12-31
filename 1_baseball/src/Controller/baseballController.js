import { GAME_START_MSG, NUMBER, TYPE } from "../constants.js";

import { Computer } from "../Model/Computer.js";
import { userInputParser } from "../Model/parser.js";
import { validator } from "../Model/validators/validator.js";

import { getUserGuess } from "../View/input.js";
import { printMsg } from "../View/output.js";

export const baseballController = async () => {
  printMsg(GAME_START_MSG);

  while (true) {
    const computer = new Computer();
    const userGuess = await getUserInput();

    const [resultMsg, isOver] = computer.compareNumber(userGuess); // 리턴 값 : [메세지, 종료 여부]
    if (!isOver) {
      printMsg(resultMsg);
    }
  }
};

const getUserInput = async () => {
  const rawInput = await getUserGuess();
  const parsedInput = userInputParser(rawInput);
  validator(TYPE.GUESS, parsedInput);
  return parsedInput.map(Number);
};
