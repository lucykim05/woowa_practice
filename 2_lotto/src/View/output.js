import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MSG } from "../constants.js";

export const printLottery = (count, numbers) => {
  Console.print(`\n${count}${OUTPUT_MSG.PURCHASE_PRICE}`);
  numbers.forEach((row) => {
    Console.print(`[${[...row].join(", ")}]`);
  });
  Console.print("");
};

export const printMsg = (msg) => {
  Console.print(msg);
};
