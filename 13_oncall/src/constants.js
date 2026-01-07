export const DEFAULT_MSG = Object.freeze({
  START_MONTH: "비상 근무를 배정할 월과 시작 요일을 입력하세요> ",
  WEEKLY_WORKERS: "평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ",
  HOLIDAY_WORKERS: "휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ",
});

export const DELIMITER = ",";

export const DAY_OF_WEEK = ["일", "월", "화", "수", "목", "금", "토"];
export const WEEKEND = ["토", "일"];

export const NATIONAL_HOLIDAY = Object.freeze({
  1: [1],
  3: [1],
  5: [5],
  6: [6],
  8: (1)[5],
  10: [3, 9],
  12: [25],
});

export const MONTH_INFO = Object.freeze({
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
});

export const MONTH_LIMIT = Object.freeze({
  MIN: 1,
  MAX: 12,
});

export const WORKER_LIMIT = Object.freeze({
  MIN: 5,
  MAX: 35,
});

export const NAME_LIMIT = Object.freeze({
  MIN: 1,
  MAX: 5,
});

export const ERROR = Object.freeze({
  EMPTY: "[ERROR] 입력 값이 비었습니다. 다시 입력 부탁드립니다.\n",
  MONTH_OUT_OF_RANGE:
    "[ERROR] 달(month)을 읽을 수 없습니다.. 1~12 사이의 수로 다시 입력해주세요.",
  UNVALID_STARTDAY: "[ERROR] 요일을 읽을 수 없습니다. 다시 입력해주세요.",
  NAME_EMPTY: "[ERROR] 이름에 빈 부분이 있습니다. 다시 입력해주세요.",
  SAME_NAME: "[ERROR] 중복되는 이름이 존재합니다. 다시 입력해주세요",
});
