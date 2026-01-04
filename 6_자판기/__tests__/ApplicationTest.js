import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = (answers) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockResolvedValueOnce(input);
  }, MissionUtils.Console.readLineAsync);
}; // readLineAsync가 나올 때마다 input 하나씩 return

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInList = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInList);
}; // pickNumberInList 호출시마다 하나씩 return

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
}; // 로그 확인(Console.print)

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join('');
}; // Console.print로 나온 output 합침

const runException = async (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  await app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
}; // log가 '[ERROR]' 가지고 있는지 확인

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
}; // 결과가 log를 포함한 결과와 일치하는지

describe('자판기 테스트', () => {
  test('기능 테스트', async () => {
    const logSpy = getLogSpy();
    mockRandoms([100, 100, 100, 100, 50]); // pickNumberInRange 호출시마다 하나씩
    mockQuestions([
      '450',
      '[콜라,1500,20];[사이다,1000,10]',
      '3000',
      '콜라',
      '사이다',
    ]); // readLineAsync 나올 때마다 하나씩

    const app = new App();
    await app.play();

    const log = getOutput(logSpy); // print된 내용 합침
    expectLogContains(log, [
      '자판기가 보유한 동전',
      '500원 - 0개',
      '100원 - 4개',
      '50원 - 1개',
      '10원 - 0개',
      '투입 금액: 3000원',
      '투입 금액: 1500원',
    ]); // output이 각 로그를 포함하는지
  });

  test('예외 테스트', async () => {
    await runException(['-1']);
  });
});
