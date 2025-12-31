export const GAME_START_MSG = `숫자 야구 게임을 시작합니다.`;
export const USER_GUESS_MSG = `숫자를 입력해주세요 : `;
export const GAME_OVER_MSG = `3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
export const RESTART_MSG = `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`;

export const TYPE = {
  GUESS: "g",
  GAMEOVER: "o",
};

export const NUMBER = {
  LENGTH: 3,
  MIN: 1,
  MAX: 9,
};

export const RESULT_INDEX = {
  STRIKE: 0,
  BALL: 1,
  NOTHING: 2,
};

export const RESULT_MSG = {
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
};

export const ERROR = {
  UNVALID_LENGTH:
    "[ERROR] 숫자의 개수가 맞지 않습니다. 세자리 숫자를 입력해주세요.",
  SPACE: "[ERROR] 빈 값이 입력되었습니다. 숫자만 입력해주세요.",
  STRING:
    "[ERROR] 문자는 입력할 수 없습니다. 중복되지 않는 1부터 9사이의 숫자로 세자리를 입력해주세요.",
  OUT_OF_RANGE:
    "[ERROR] 숫자의 범위가 맞지 않습니다. 올바른 범위의 숫자를 입력해주세요.",
  SAME_NUMBER:
    "[ERROR] 숫자가 중복됩니다. 중복되지 않는 1부터 9사이의 숫자로 세자리를 입력해주세요.",
};
