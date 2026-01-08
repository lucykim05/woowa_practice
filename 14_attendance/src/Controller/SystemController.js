import { FILE_URL, FINISH } from "../constants.js";
import { Info } from "../Model/Info.js";
import { Parser } from "../Model/Parser.js";
import { DateInfo } from "../Utils/DateInfo.js";
import { readFile } from "../Utils/readFile.js";
import { InputView } from "../View/InputView.js";
import { OutputView } from "../View/OutputView.js";
import { AttendanceController } from "./AttendanceController.js";

export const SystemController = {
  initialize() {
    const rawAttendanceData = readFile(FILE_URL);
    const parsedData = Parser.rawFile(rawAttendanceData);
    saveData(parsedData);
  },

  async start() {
    while (true) {
      const todayMsg = getTodayMsg();
      OutputView.start(todayMsg);
      const input = await getInput();
      if (input === FINISH) return;

      await this.process(input);
    }
  },

  async process(input) {
    if (input === "1") await AttendanceController.process();
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

const getTodayMsg = () => {
  const month = DateInfo.getMonth();
  const day = DateInfo.getDayNumber();
  const dayName = DateInfo.getDayName();

  return `오늘은 ${month}월 ${day}일 ${dayName}요일입니다. 기능을 선택해 주세요.`;
};

const getInput = async () => {
  while (true) {
    try {
      const rawInput = await InputView.option();
      return rawInput;
    } catch (error) {
      OutputView.error(error.message);
    }
  }
};
