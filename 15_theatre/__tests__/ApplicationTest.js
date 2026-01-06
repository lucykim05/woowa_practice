import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const runException = async (inputs) => {
  const logSpy = getLogSpy();
  mockQuestions([...inputs, 'Q']);

  const app = new App();
  await app.run();

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

describe('영화관 예매 시스템 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('상영 정보 조회 기능 테스트', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['1', 'A', '10', 'Q']);

    const app = new App();
    await app.run();

    const logs = [
      '영화관 예매 시스템에 오신 것을 환영합니다.',
      'A 상영관 10시 상영 좌석 현황',
      '  1 2 3 4 5 6 7 8 9 10',
      'A X X X O O O O O O O',
      '예매 가능',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('좌석 예매 기능 테스트', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['2', 'A', '14', 'C3', '4', 'Q']);

    const app = new App();
    await app.run();

    const logs = [
      '예매가 완료되었습니다.',
      '예매 번호: R',
      '상영관: A관',
      '시간대: 14시',
      '좌석: C3, C4, C5, C6',
      '일반석 4석',
      '인원수: 4명',
      '기본 금액: 40,000원',
      '단체 할인: -4,000원',
      '최종 결제 금액: 36,000원',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('조조 할인 적용 테스트', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['2', 'B', '10', 'A1', '2', 'Q']);

    const app = new App();
    await app.run();

    const logs = [
      '예매가 완료되었습니다.',
      'VIP석 2석',
      '기본 금액: 30,000원',
      '최종 결제 금액: 21,000원',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('심야 할인 적용 테스트', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['2', 'C', '22', 'E1', '3', 'Q']);

    const app = new App();
    await app.run();

    const logs = [
      '예매가 완료되었습니다.',
      '일반석 3석',
      '기본 금액: 30,000원',
      '최종 결제 금액: 24,000원',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('단체 할인과 조조 할인 중복 적용 테스트', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['2', 'B', '10', 'C1', '5', 'Q']);

    const app = new App();
    await app.run();

    const logs = [
      '예매가 완료되었습니다.',
      '일반석 5석',
      '기본 금액: 50,000원',
      '단체 할인: -5,000원',
      '최종 결제 금액: 31,500원',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예매 취소 기능 테스트', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['3', 'R001', 'Q']);

    const app = new App();
    await app.run();

    const logs = ['예매 번호 R001이 취소되었습니다.', '환불 금액:'];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('매출 통계 기능 테스트', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['4', 'Q']);

    const app = new App();
    await app.run();

    const logs = [
      '=== 매출 통계 ===',
      '상영관별 매출',
      'A관:',
      '시간대별 매출',
      '10시:',
      '총 예매 건수:',
      '총 매출액:',
      '평균 예매 금액:',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('잘못된 상영관 입력 예외 테스트', async () => {
    await runException(['1', 'D', '10']);
  });

  test('잘못된 시간대 입력 예외 테스트', async () => {
    await runException(['1', 'A', '12']);
  });

  test('잘못된 좌석 번호 입력 예외 테스트', async () => {
    await runException(['2', 'A', '14', 'F1', '2']);
  });

  test('0명 이하 인원수 입력 예외 테스트', async () => {
    await runException(['2', 'A', '14', 'C1', '0']);
  });

  test('음수 인원수 입력 예외 테스트', async () => {
    await runException(['2', 'A', '14', 'C1', '-1']);
  });

  test('이미 예매된 좌석 예외 테스트', async () => {
    await runException(['2', 'A', '10', 'A1', '2']);
  });

  test('존재하지 않는 예매 번호 취소 예외 테스트', async () => {
    await runException(['3', 'R999']);
  });

  test('잘못된 메뉴 선택 예외 테스트', async () => {
    await runException(['5']);
  });

  test('연속된 좌석 부족 예외 테스트', async () => {
    await runException(['2', 'A', '10', 'A2', '5']);
  });
});
