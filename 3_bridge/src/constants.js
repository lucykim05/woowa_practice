export const DEFAULT_MSG = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.\n",
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.\n",
  MOVE: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
});

export const BRIDGE_SIZE = Object.freeze({
  MIN: 3,
  MAX: 20,
});

export const MOVE = Object.freeze({
  UP: "U",
  DOWN: "D",
});

export const ERROR = Object.freeze({
  EMPTY: `[ERROR] 입력 값이 비어있습니다. 값을 입력해주세요.`,
  OUT_OF_RANGE: `[ERROR] 값이 범위에 맞지 않습니다. 다시 입력해주세요.`,
  NAN: `[ERROR] 값이 숫자가 아닙니다. 숫자만 입력해주세요.`,
});
