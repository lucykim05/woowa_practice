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
    mockQuestions(['2', 'A', '14', '4', 'C3', 'C4', 'C5', 'C6', 'Q']);

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
    mockQuestions(['2', 'B', '10', '2', 'A1', 'A2', 'Q']);

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
    mockQuestions(['2', 'C', '22', '3', 'E1', 'E2', 'E3', 'Q']);

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
    mockQuestions(['2', 'B', '10', '5', 'C1', 'C2', 'C3', 'C4', 'C5', 'Q']);

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
    await runException(['2', 'A', '14', '2', 'F1', 'F2']);
  });

  test('0명 이하 인원수 입력 예외 테스트', async () => {
    await runException(['2', 'A', '14', '0']);
  });

  test('음수 인원수 입력 예외 테스트', async () => {
    await runException(['2', 'A', '14', '-1']);
  });

  test('이미 예매된 좌석 예외 테스트', async () => {
    await runException(['2', 'A', '10', '2', 'A1', 'A2']);
  });

  test('존재하지 않는 예매 번호 취소 예외 테스트', async () => {
    await runException(['3', 'R999']);
  });

  test('잘못된 메뉴 선택 예외 테스트', async () => {
    await runException(['5']);
  });

  test('중복 좌석 입력 예외 테스트', async () => {
    await runException(['2', 'A', '14', '3', 'C1', 'C1', 'C2']);
  });

  test('인원수와 좌석 개수 불일치', async () => {
    await runException(['2', 'A', '14', '3', 'C1', 'C2']);
  });

  test('1명 예매 - 할인 없음', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['2', 'B', '14', '1', 'D1', 'Q']);

    const app = new App();
    await app.run();

    const logs = [
      '예매가 완료되었습니다.',
      '일반석 1석',
      '인원수: 1명',
      '기본 금액: 10,000원',
      '최종 결제 금액: 10,000원',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('단체 할인과 심야 할인 중복 적용', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['2', 'C', '22', '4', 'A1', 'A2', 'A3', 'A4', 'Q']);

    const app = new App();
    await app.run();

    const logs = [
      '예매가 완료되었습니다.',
      'VIP석 4석',
      '기본 금액: 60,000원',
      '단체 할인: -4,000원',
      '최종 결제 금액: 44,800원',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('VIP석과 일반석 혼합 예매 불가', async () => {
    await runException(['2', 'A', '14', '3', 'B9', 'B10', 'C1']);
  });

  test('최대 좌석(10석) 예매', async () => {
    const logSpy = getLogSpy();
    mockQuestions([
      '2',
      'C',
      '14',
      '10',
      'E1',
      'E2',
      'E3',
      'E4',
      'E5',
      'E6',
      'E7',
      'E8',
      'E9',
      'E10',
      'Q',
    ]);

    const app = new App();
    await app.run();

    const logs = [
      '예매가 완료되었습니다.',
      '일반석 10석',
      '인원수: 10명',
      '기본 금액: 100,000원',
      '단체 할인: -10,000원',
      '최종 결제 금액: 90,000원',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('상영 정보 조회 - B관 14시', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['1', 'B', '14', 'Q']);

    const app = new App();
    await app.run();

    const logs = [
      'B 상영관 14시 상영 좌석 현황',
      '  1 2 3 4 5 6 7 8 9 10',
      'C X X O',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('상영 정보 조회 - C관 22시', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['1', 'C', '22', 'Q']);

    const app = new App();
    await app.run();

    const logs = [
      'C 상영관 22시 상영 좌석 현황',
      '  1 2 3 4 5 6 7 8 9 10',
      'E X X O',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('여러 기능 연속 실행', async () => {
    const logSpy = getLogSpy();
    mockQuestions([
      '1',
      'A',
      '10',
      '2',
      'B',
      '18',
      '3',
      'C1',
      'C2',
      'C3',
      '4',
      '3',
      'R002',
      'Q',
    ]);

    const app = new App();
    await app.run();

    [
      'A 상영관 10시 상영 좌석 현황',
      '예매가 완료되었습니다.',
      '=== 매출 통계 ===',
      '예매 번호 R002이 취소되었습니다.',
    ].forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('좌석 번호 대소문자 구분', async () => {
    await runException(['2', 'A', '14', '2', 'a1', 'a2']);
  });

  test('좌석 번호 형식 오류 - 숫자만', async () => {
    await runException(['2', 'A', '14', '2', '1', '2']);
  });

  test('좌석 번호 형식 오류 - 문자만', async () => {
    await runException(['2', 'A', '14', '2', 'AA', 'BB']);
  });

  test('상영관 입력 대소문자 혼합', async () => {
    await runException(['1', 'a', '10']);
  });

  test('시간대 문자열 입력', async () => {
    await runException(['1', 'A', 'ten']);
  });

  test('인원수 문자열 입력', async () => {
    await runException(['2', 'A', '14', 'four']);
  });

  test('예매 번호 형식 오류', async () => {
    await runException(['3', '001']);
  });

  test('빈 문자열 입력 - 메뉴', async () => {
    await runException(['']);
  });

  test('빈 문자열 입력 - 상영관', async () => {
    await runException(['1', '', '10']);
  });

  test('빈 문자열 입력 - 시간대', async () => {
    await runException(['1', 'A', '']);
  });

  test('공백 문자 입력', async () => {
    await runException(['1', ' ', '10']);
  });

  test('매출 통계 - 예매 없을 때', async () => {
    const logSpy = getLogSpy();
    mockQuestions([
      '3',
      'R001',
      '3',
      'R002',
      '3',
      'R003',
      '3',
      'R004',
      '3',
      'R005',
      '4',
      'Q',
    ]);

    const app = new App();
    await app.run();

    const logs = ['총 예매 건수: 0건', '총 매출액: 0원'];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('동일 예매 번호 중복 취소', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['3', 'R001', '3', 'R001', 'Q']);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('예매 번호 R001이 취소되었습니다.')
    );
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('예매 후 같은 좌석 재예매 시도', async () => {
    const logSpy = getLogSpy();
    mockQuestions([
      '2',
      'B',
      '18',
      '2',
      'D1',
      'D2',
      '2',
      'B',
      '18',
      '2',
      'D1',
      'D2',
      'Q',
    ]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('예매가 완료되었습니다.')
    );
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('예매 후 취소 후 재예매', async () => {
    const logSpy = getLogSpy();
    mockQuestions([
      '2',
      'C',
      '18',
      '3',
      'A1',
      'A2',
      'A3',
      '3',
      'R006',
      '2',
      'C',
      '18',
      '2',
      'A1',
      'A2',
      'Q',
    ]);

    const app = new App();
    await app.run();

    [
      '예매가 완료되었습니다.',
      '취소되었습니다.',
      '예매가 완료되었습니다.',
    ].forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
