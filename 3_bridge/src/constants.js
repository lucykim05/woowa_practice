export const INPUT_MSG = {
  BRIDGE_SIZE: `다리의 길이를 입력해주세요.\n`,
  MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  ROUND_OVER:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

export const OUTPUT_MSG = {
  START_GAME: `다리 건너기 게임을 시작합니다.\n`,
};

export const BRIDGE_LENGTH = {
  MIN: 3,
  MAX: 20,
};

export const MOVEMENT = {
  UP: "U",
  DOWN: "D",
};

export const PLAYER_MOVE = {
  SUCCESS: "O",
  FAIL: "X",
};

export const ERROR = {
  EMPTY: "[ERROR] 값이 비어있습니다. 다시 입력해주세요.",
  NAN: "[ERROR] 숫자가 아닙니다. 3부터 20 사이의 숫자를 입력해주세요.",
  OUT_OF_RANGE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  UNVALID_INPUT:
    "[ERROR] 알 수 없는 값입니다. 다시 입력해주세요. (소문자 불가)",
};
