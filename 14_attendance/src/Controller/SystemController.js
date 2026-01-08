import { FILE_URL } from "../constants.js";
import { Info } from "../Model/Info.js";
import { Parser } from "../Model/Parser.js";
import { readFile } from "../Utils/readFile.js";

export const SystemController = {
  initialize() {
    const rawAttendanceData = readFile(FILE_URL);
    const parsedData = Parser.rawFile(rawAttendanceData);
    saveData(parsedData);
  },
};

const getNewObjectFormat = () => {
  return {
    DATE: {
      MONTH: 0,
      DAY: 0,
      TIME: {
        HOUR: "",
        MINUTE: "",
      },
    },
    STATUS: "",
  };
};

const saveData = (data) => {
  for (const row of data) {
    const format = getNewObjectFormat();
    const [name, temp] = Parser.parse(row, ",");
    const [date, time] = Parser.parse(temp, " ");
    const [year, month, day] = Parser.parse(date, "-");
    const [hour, minute] = Parser.parse(time, ":");

    format.DATE.MONTH = month;
    format.DATE.DAY = day;
    format.DATE.TIME.HOUR = hour;
    format.DATE.TIME.MINUTE = minute;

    if (!Info[name]) {
      Info[name] = [format];
      continue;
    }
    Info[name].push(format);
  }
};
