import { Console } from "@woowacourse/mission-utils";
import { INPUT_MSG } from "../constants.js";
export const getPurchase = async () => {
  return await Console.readLineAsync(INPUT_MSG.PURCHASE_PRICE);
};

export const getWinningNum = async () => {
  return await Console.readLineAsync(INPUT_MSG.WINNING_NUMBER);
};
