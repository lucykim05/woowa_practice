export const INPUT_MSG = {
  START: "점심 메뉴 추천을 시작합니다.",
  COACH: "\n코치의 이름을 입력해 주세요. (, 로 구분)\n",
  DONT_EAT: "(이)가 못 먹는 메뉴를 입력해 주세요.\n",
};

export const OUTPUT_MSG = {
  DAYS: "[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]\n",
  CATEGORY: "카테고리",
  START: "[ ",
  DELIMITER: " | ",
  END: " ]",
  OVER: "\n추천을 완료했습니다.",
};

export const DAYS = 5;

export const CATEGORY = {
  1: "일식",
  2: "한식",
  3: "중식",
  4: "아시안",
  5: "양식",
};

export const CATEGORY_LIMIT = 2;

export const COACH_COUNT = {
  MIN: 2,
  MAX: 5,
};

export const COACH_NAME_LIMIT = {
  MIN: 2,
  MAX: 4,
};

export const MENU_LIMIT = {
  MAX: 2,
};

export const ERROR_MSG = {
  EMPTY: "[ERROR] 입력 값이 비어있습니다. 다시 입력해주세요.",
  NAME_OUT_OF_RANGE: "[ERROR] 코치 이름은 2글자 이상, 4글자 이하여야 합니다.",
  COACH_COUNT_OUT_OF_RANGE: "[ERROR] 코치는 2명 이상, 5명 이하여야 합니다.",
  MENU_COUNT_OUT_OF_RANGE:
    "[ERROR] 메뉴 종류는 2가지 이하여야 합니다. 없는 경우 빈 값을 입력해주세요.",
  MENU_NO_EXIST: "[ERROR] 존재하지 않는 메뉴입니다.",
};
