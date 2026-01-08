import { Console, DateTimes } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import { jest } from "@jest/globals";

const mockQuestions = (inputs) => {
  const messages = [];

  Console.readLineAsync = jest.fn((prompt) => {
    messages.push(prompt);
    const input = inputs.shift();

    if (input === undefined) {
      throw new Error("NO INPUT");
    }

    return Promise.resolve(input);
  });

  Console.readLineAsync.messages = messages;
};

const mockNowDate = (date = null) => {
  const mockDateTimes = jest.spyOn(DateTimes, "now");
  mockDateTimes.mockReturnValue(new Date(date));

  return mockDateTimes;
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join(LINE_SEPARATOR);
};

const expectLogContains = (received, expects) => {
  expects.forEach((exp) => {
    expect(received).toContain(exp);
  });
};

const runExceptions = async ({ inputs = [], expectedErrorMessage = "" }) => {
  // given
  mockQuestions([...inputs]);

  // when
  const app = new App();

  // then
  await expect(app.run()).rejects.toThrow(expectedErrorMessage);
};

const run = async ({ inputs = [], inputsToTerminate = [], expected = [] }) => {
  // given
  const logSpy = getLogSpy();
  mockQuestions([...inputs, ...inputsToTerminate]);

  // when
  const app = new App();
  await app.run();

  const output = getOutput(logSpy);

  if (expected.length > 0) {
    expectLogContains(output, expected);
  }
};

const INPUTS_TO_TERMINATE = ["q"];
const LINE_SEPARATOR = "\n";

describe("테스트", () => {
  test("잘못된 형식 예외 테스트", async () => {
    mockNowDate("2026-01-08");

    await runExceptions({
      inputs: ["1", "짱수", "33:71"],
      inputsToTerminate: INPUTS_TO_TERMINATE,
      expectedErrorMessage: "[ERROR] 잘못된 형식을 입력하였습니다.",
    });
  });

  test("등록되지 않은 닉네임 예외 테스트", async () => {
    mockNowDate("2026-01-08");
    await runExceptions({
      inputs: ["1", "빈봉"],
      inputsToTerminate: INPUTS_TO_TERMINATE,
      expectedErrorMessage: "[ERROR] 등록되지 않은 닉네임입니다.",
    });
  });

  test("주말 또는 공휴일 예외 테스트", async () => {
    mockNowDate("2026-01-10");

    await runExceptions({
      inputs: ["1"],
      inputsToTerminate: INPUTS_TO_TERMINATE,
      expectedErrorMessage: "[ERROR] 1월 10일 토요일은 등교하는 날이 아닙니다.",
    });
  });

  test("출석 확인 기능 테스트", async () => {
    mockNowDate("2026-01-08");

    await run({
      inputs: ["1", "짱수", "08:00"],
      inputsToTerminate: INPUTS_TO_TERMINATE,
      expected: ["1월 8일 목요일 08:00 (출석)"],
    });
  });

  test("출석 수정 및 크루별 출석 기록 확인 기능 테스트", async () => {
    mockNowDate("2026-01-08");

    await run({
      inputs: ["2", "짱수", "6", "10:31", "3", "짱수"],
      inputsToTerminate: INPUTS_TO_TERMINATE,
      expected: [
        "1월 6일 화요일 10:00 (출석) -> 10:31 (결석) 수정 완료!",

        "1월 02일 금요일 13:00 (출석)",
        "1월 03일 토요일 10:00 (출석)",
        "1월 04일 일요일 10:00 (출석)",
        "1월 05일 월요일 10:00 (출석)",
        "1월 06일 화요일 10:31 (결석)",
        "1월 07일 수요일 --:-- (결석)",
        "1월 08일 목요일 --:-- (결석)",

        "출석: 4회",
        "지각: 0회",
        "결석: 3회",

        "면담 대상자",
      ],
    });
  });
});
