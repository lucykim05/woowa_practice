import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MSG } from "../constants.js";
export const printError = (errorMsg) => {
  Console.print(errorMsg);
};

export const printLottery = (count, numbers) => {
  Console.print(`\n${count}${OUTPUT_MSG.PURCHASE_PRICE}`);
  numbers.forEach((row) => {
    Console.print(row);
  });
  Console.print("");
};
