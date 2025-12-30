import { Console } from "@woowacourse/mission-utils";
import { INPUT_MSG } from "../constants.js";
export const getPurchase = async () => {
  const input = await Console.readLineAsync(INPUT_MSG.PURCHASE_PRICE);
  return Number(input);
};
