export const PARSING_DELIMITER = ",";
export const MENU_SAMPLE = [];
export const DAYS = 5;
export const CATEGORY_LIMIT = 2;
export const CANT_EAT_LIMIT = 2;

export const COACH_LIMIT = Object.freeze({
  MIN: 2,
  MAX: 5,
});

export const COACH_NAME_LIMIT = Object.freeze({
  MIN: 2,
  MAX: 4,
});

export const DEFAULT_MSG = Object.freeze({
  START: `점심 메뉴 추천을 시작합니다.\n`,
  COACH_LIST: `코치의 이름을 입력해 주세요. (, 로 구분)\n`,
  CANT_EAT: `(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
  RESULT: `메뉴 추천 결과입니다.\n`,
  FINISH: `\n추천을 완료했습니다.`,
});

export const ERROR = Object.freeze({
  EMPTY: "[ERROR] 입력 값이 비었습니다. 다시 입력해주세요.",
  COACH_OUT_OF_RANGE:
    "[ERROR] 코치들의 수는 반드시 2명 이상 5명 이하여야 합니다.",
  NAME_OUT_OF_RANGE:
    "[ERROR] 이름의 길이는 반드시 2글자 이상 4글자 이하여야 합니다.",
  MENU_OUT_OF_RANGE: "[ERROR] 못 먹는 메뉴는 2가지 이하만 입력할 수 있습니다.",
  MENU_NO_EXIST: "[ERROR] 해당 메뉴는 존재하지 않습니다.",
});
