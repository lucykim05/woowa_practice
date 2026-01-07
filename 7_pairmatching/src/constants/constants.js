export const MESSAGE = Object.freeze({
  MISSION_INFO:
    '#############################################\n과정: 백엔드 | 프론트엔드\n미션:\n  - 레벨1: 자동차경주 | 로또 | 숫자야구게임\n  - 레벨2: 장바구니 | 결제 | 지하철노선도\n  - 레벨3:\n  - 레벨4: 성능개선 | 배포\n  - 레벨5:\n############################################\n',
  MISSION_REQUEST:
    '과정, 레벨, 미션을 선택하세요.\nex) 백엔드, 레벨1, 자동차경주\n',
  COMMAND:
    '\n기능을 선택하세요.\n1. 페어 매칭\n2. 페어 조회\n3. 페어 초기화\nQ. 종료\n',
  RESET: '\n매칭 정보가 있습니다. 다시 매칭하시겠습니까?\n네 | 아니오\n',
  RESET_SUCCESS: '\n초기화 되었습니다.',
  RESULT: '\n페어 매칭 결과입니다.',
});

export const ERROR = Object.freeze({
  CLASS: '[ERROR] ',
  LEVEL: '[ERROR] ',
  NAME: '[ERROR] ',
  RESET: '[ERROR] ',
  NO_RESULT: '[ERROR] ',
  COMMAND: '[ERROR] ',
});

export const MISSION = Object.freeze({
  COURSE: ['백엔드', '프론트엔드'],
  LEVEL: ['레벨1', '레벨2', '레벨3', '레벨4', '레벨5'],
  NAME: [
    '자동차경주',
    '로또',
    '숫자야구게임',
    '장바구니',
    '결제',
    '지하철노선도',
    '성능개선',
    '배포',
  ],
  INFO: [
    ['레벨1', '자동차경주'],
    ['레벨1', '로또'],
    ['레벨1', '숫자야구게임'],
    ['레벨2', '장바구니'],
    ['레벨2', '결제'],
    ['레벨2', '지하철노선도'],
    ['레벨4', '성능개선'],
    ['레벨4', '배포'],
  ],
});

export const INPUT = Object.freeze({
  COMMAND: ['1', '2', '3', 'Q'],
});
