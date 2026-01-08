import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ERROR } from "../constants.js";

// 현재 파일의 절대 경로
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const readFile = (url) => {
  const filePath = path.join(__dirname, url);

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return data;
  } catch (error) {
    throw Error(ERROR.FILE);
  }
};
