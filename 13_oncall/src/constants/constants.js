export const DATE = Object.freeze({
  DAY_NAME: ['월', '화', '수', '목', '금', '토', '일'],
  DAY_MAP: Object.freeze({
    월: 0,
    화: 1,
    수: 2,
    목: 3,
    금: 4,
    토: 5,
    일: 6,
  }),
  WORKDAY: ['월', '화', '수', '목', '금'],
  WEEKEND: ['토', '일'],
  MONTH: Object.freeze({
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  }),
  HOLIDAY: Object.freeze({
    1: [1],
    3: [1],
    5: [5],
    6: [6],
    8: [15],
    10: [3, 9],
    12: [25],
  }),
});

export const MESSAGE = Object.freeze({
  DATE: '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
  WORK_DAY: '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
  WEEK_END: '휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
});

export const ERROR = Object.freeze({
  NOT_A_NUMBER: '[ERROR] 숫자를 입력해주세요.',
  NOT_INTEGER: '[ERROR] 자연수를 입력해주세요.',
  MONTH_IN_RANGE: '[ERROR] 1 이상 12 이하의 숫자를 입력해주세요.',
  DAY_IN_RANGE: '[ERROR] 요일을 입력해주세요.',
  TOTAL_LENGTH: '[ERROR] 총 인원수가 적절하지 않습니다.',
  WORKER_LENGTH: '[ERROR] 인원수가 적절하지 않습니다.',
  NOT_UNIQUE: '[ERROR] 중복된 인원이 있습니다.',
  NOT_KOREAN: '[ERROR] 닉네임은 한글로만 설정 가능합니다.',
  NAME_RANGE: '[ERROR] 닉네임은 5글자 이하로 설정 가능합니다.',
});
