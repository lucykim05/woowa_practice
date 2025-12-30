import { Console } from "@woowacourse/mission-utils";
import { INPUT_MSG } from "../constants.js";
export const getPurchaseInput = async () => {
  return await Console.readLineAsync(INPUT_MSG.PURCHASE_PRICE);
};

export const getWinningNumInput = async () => {
  return await Console.readLineAsync(INPUT_MSG.WINNING_NUMBER);
};

export const getBonusNumInput = async () => {
  return await Console.readLineAsync(INPUT_MSG.BONUS_NUMBER);
};
