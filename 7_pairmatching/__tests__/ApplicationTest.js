import App from '../src/Application.js';
import Console from '../src/utils/Console.js';
import Random from '../src/utils/Random.js';
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

  const getOutput = () => logSpy.mock.calls.map((call) => call[0]).join(EOL);

  test('짝수 인원 페어 매칭', async () => {
    jest
      .spyOn(Random, 'shuffle')
      .mockReturnValue(['태웅', '백호', '치수', '태섭']);

    mockInputs(['1', '백엔드, 레벨1, 자동차경주', 'Q']);

    const app = new App();
    await app.run();

    const output = getOutput();

    expect(output).toContain('태웅 : 백호');
    expect(output).toContain('치수 : 태섭');
  });

  test('없는 미션에 대한 예외 처리', async () => {
    mockInputs(['1', '백엔드, 레벨1, 오징어게임']);

    const app = new App();
    await app.run();

    const output = getOutput();
    expect(output).toContain('[ERROR]');
  });
});
