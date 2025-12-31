import { GAME_START_MSG, TYPE } from "../constants.js";

import { Computer } from "../Model/Computer.js";
import { userInputParser } from "../Model/parser.js";
import { validator } from "../Model/validators/validator.js";

import { getUserGuess, getGameOverInput } from "../View/input.js";
import { printMsg } from "../View/output.js";

export const baseballController = async () => {
  printMsg(GAME_START_MSG);

  while (true) {
    const computer = new Computer();
    const userGuess = await getUserInput();

    const [resultMsg, isStrike] = computer.compareNumber(userGuess); // 리턴 값 : [메세지, 종료 여부]
    if (isStrike) {
      const isGameOver = await gameOverProcess(resultMsg);
    }

    printMsg(resultMsg);
  }
};

const getUserInput = async () => {
  const rawInput = await getUserGuess();
  const parsedInput = userInputParser(rawInput);
  validator(TYPE.GUESS, parsedInput);
  return parsedInput.map(Number);
};

const gameOverProcess = async (resultMsg) => {
  printMsg(resultMsg);
  const gameOverInput = await getGameOverInput();
  validator(TYPE.GAMEOVER, gameOverInput);

  const answer = Number(gameOverInput);
  if (answer === 1) return true;
  return false;
};
