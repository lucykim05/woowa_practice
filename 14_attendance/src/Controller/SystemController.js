import { DAY_NAME_LIST, FILE_URL, FINISH } from "../constants.js";
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
      try {
        const todayMsg = getTodayMsg();
        OutputView.start(todayMsg);

        const input = await getInput();
        if (input === FINISH) return;

        await this.process(input);
      } catch (error) {
        OutputView.error(error.message);
        return;
      }
    }
  },

  async process(input) {
    try {
      if (input === "1") await AttendanceController.process();
    } catch (error) {
      throw Error(error.message);
    }
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

export const saveData = (data) => {
  for (const row of data) {
    const [name, temp] = Parser.parse(row, ",");
    const [date, time] = Parser.parse(temp, " ");
    const [year, month, day] = Parser.parse(date, "-");
    const [hour, minute] = Parser.parse(time, ":");
    const dayName = DateInfo.getDayName(date);

    const format = getNewObjectFormat();
    format.DATE.MONTH = month;
    format.DATE.DAY = day;
    format.STATUS = checkStatus(dayName, Number(hour), Number(minute));
    if (format.STATUS === "결석") {
      format.DATE.TIME.HOUR = "--";
      format.DATE.TIME.MINUTE = "--";
    } else {
      format.DATE.TIME.HOUR = Number(hour);
      format.DATE.TIME.MINUTE = Number(minute);
    }

    if (!Info[name]) {
      Info[name] = [format];
      continue;
    }
    Info[name].push(format);
  }
};

const checkStatus = (dayName, hour, minute) => {
  if (dayName === DAY_NAME_LIST[1]) {
    if ((hour === 13 && minute > 30) || hour > 13) return "결석";
    if (hour === 13 && minute > 5) return "지각";
    return "출석";
  }

  if ((hour === 10 && minute > 30) || hour > 10) return "결석";
  if (hour === 10 && minute > 5) return "지각";
  return "출석";
};

const getTodayMsg = () => {
  const month = DateInfo.getMonth();
  const day = DateInfo.getDayNumber();
  const dayName = DateInfo.getDayName();

  return `\n오늘은 ${month}월 ${day}일 ${dayName}요일입니다. 기능을 선택해 주세요.`;
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
