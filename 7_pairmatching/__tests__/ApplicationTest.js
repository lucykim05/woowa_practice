import App from '../src/App.js';
import { Console, Random } from '@woowacourse/mission-utils';
import { EOL } from 'os';

describe('ApplicationTest', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(Console, 'print').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const mockInputs = (inputs) => {
    jest
      .spyOn(Console, 'readLineAsync')
      .mockImplementation(() => Promise.resolve(inputs.shift()));
  };

  const getOutput = () =>
    logSpy.mock.calls.map(([message]) => message).join(EOL);

  test('짝수 인원 페어 매칭', async () => {
    jest.spyOn(Random, 'shuffle').mockReturnValue([0, 1, 2, 3]);

    mockInputs(['1', '백엔드, 레벨1, 자동차경주', 'Q']);

    const app = new App();
    await app.run();

    const output = getOutput();

    expect(output).toContain('백호 : 태웅');
    expect(output).toContain('치수 : 태섭');
  });

  test('없는 미션에 대한 예외 처리', async () => {
    mockInputs([
      '2', // 기능 선택
      '백엔드, 레벨1, 오징어게임', // 잘못된 미션
      'Q', // 종료
    ]);

    const app = new App();
    await app.run();

    const output = getOutput();
    expect(output).toContain('[ERROR]');
  });
});
