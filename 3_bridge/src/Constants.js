export const MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  LENGTH: '\n다리의 길이를 입력해주세요.',
  MOVE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)',
  RETRY: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
});

export const ERROR = Object.freeze({
  NOT_A_NUMBER: '[ERROR] 숫자를 입력해주세요.',
  NOT_INTEGER: '[ERROR] 자연수를 입력해주세요.',
  NOT_IN_RANGE: '[ERROR] 3 이상 20 이하의 숫자를 입력해주세요.',
  MOVE: '[ERROR] U 혹은 D를 입력해주세요. (위: U, 아래: D)',
  RETRY: '[ERROR] R 혹은 Q를 입력해주세요. (재시도: R, 종료: Q)',
  BRIDGE_LEGNTH: '[ERROR] 다리 설정 오류',
  BRIDGE_LETTER: '[ERROR] 다리 설정 오류',
});
