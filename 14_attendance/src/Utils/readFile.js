import fs from "fs";
import { ERROR } from "../constants.js";

export const readFile = (url) => {
  try {
    const content = fs.readFileSync(url, "utf-8");
    return content;
  } catch (error) {
    throw Error(ERROR.FILE);
  }
};
