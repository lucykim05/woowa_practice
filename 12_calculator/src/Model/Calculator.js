import { Parser } from "./Parser.js";
import { Validator } from "./Validator.js";
import { DEFAULT } from "../constants.js";

class Calculator {
  #customDelimiters;
  #numArr;
  constructor() {
    this.#initialize();
  }

  #initialize() {
    this.#customDelimiters = "";
    this.#numArr = "";
  }

  #checkCustom(input) {
    if (
      input.includes(DEFAULT.CUSTOM_DELIMITER.START) &&
      input.includes(DEFAULT.CUSTOM_DELIMITER.END)
    ) {
      [this.#customDelimiters, this.#numArr] = Parser.customDelimiter(input);
      return;
    }

    this.#numArr = input;
  }

  processInput(input) {
    this.#initialize();
    this.#checkCustom(input);
    this.#numArr = Parser.delimiter(this.#numArr, this.#customDelimiters);
    Validator.number(this.#numArr);
  }

  getResult() {
    const result = this.#numArr.reduce((acc, cur) => acc + cur);
    return `${DEFAULT.RESULT}${result}`;
  }
}
export const calculator = new Calculator();
