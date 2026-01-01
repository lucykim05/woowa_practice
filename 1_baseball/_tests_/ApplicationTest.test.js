import App from "../src/App.js";
import { Console, Random } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  // 1. readLine이 아니라 readLineAsync를 모킹해야 합니다.
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    // 2. 비동기 함수이므로 Promise.resolve를 반환해야 합니다.
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();

  const messages = [];
  for (let i = 0; i < numbers.length; i += 3) {
    messages.push(numbers.slice(i, i + 3));
  }

  messages.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", () => {
  // 3. 테스트 함수 앞에 async를 붙여야 합니다.
  test("게임 종료 후 재시작", async () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "3스트라이크",
      "1볼 1스트라이크",
      "3스트라이크",
      "게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();

    // 4. app.run()은 비동기이므로 await를 붙여서 끝날 때까지 기다려야 합니다.
    await app.run();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트", async () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // 5. 비동기 예외 처리는 rejects.toThrow()를 사용해야 합니다.
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
