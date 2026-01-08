import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ERROR } from "../constants.js";
import { commaParser } from "./commaParser.js";

// 현재 파일의 절대 경로
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const readFile = (url) => {
  const filePath = path.join(__dirname, url);

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const modifiedData = modify(data);
    return modifiedData;
  } catch (error) {
    throw Error(ERROR.FILE);
  }
};

const modify = (data) => {
  const dataByRow = data.split("\r\n");
  return dataByRow.map((v) => commaParser(v));
};
