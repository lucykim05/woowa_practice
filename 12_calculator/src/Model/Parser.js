import { DEFAULT } from "../constants.js";

export const Parser = {
  customDelimiter(input) {
    const [rawDelimiter, numbers] = input.split(DEFAULT.CUSTOM_DELIMITER.END);
    return [rawDelimiter.slice(2), numbers];
  },

  delimiter(input, customDelimiters) {
    if (customDelimiters.length !== 0) {
      const regex = new RegExp(`[${customDelimiters}${DEFAULT.DELIMITER}]`);
      return input.split(regex);
    }
    const regex = new RegExp(`[${DEFAULT.DELIMITER}]`);
    return input.split(regex);
  },
};
