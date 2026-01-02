export const INPUT_MSG = {
  START: "점심 메뉴 추천을 시작합니다.",
  COACH: "\n코치의 이름을 입력해 주세요. (, 로 구분)\n",
};

export const COACH_COUNT = {
  MIN: 2,
  MAX: 5,
};

export const COACH_NAME_LIMIT = {
  MIN: 2,
  MAX: 4,
};

export const ERROR_MSG = {
  EMPTY: "[ERROR] 입력 값이 비어있습니다. 다시 입력해주세요.",
  NAME_OUT_OF_RANGE: `[ERROR] 코치 이름은 2글자 이상, 4글자 이하여야 합니다.`,
  COACH_COUNT_OUT_OF_RANGE: `[ERROR] 코치는 2명 이상, 5명 이하여야 합니다.`,
};
