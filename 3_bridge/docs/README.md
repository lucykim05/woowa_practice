## 다리 건너기

사용자가 다리를 건너는 프로그램;

## 설계

## 기능 상세 설명

### Model

### View

### Controller

## 구현 기능 목록

### Model

BridgeGame

- 다리 길이
- 다리 정보
- 사용자 이동 정보
- 단계 정보 (round, 몇 번째 칸인지 확인 )
- 완주 상태
- 도전 정보 (trial, 몇 판 했는지 확인)
- [ ] initialize
  - [ ] 필드 초기화
- [ ] make
  - [ ] 다리 생성 → 저장
- [ ] getRandNum
  - [ ] 랜덤 0/1 뽑는 메소드
- [ ] canMove
  - [ ] 사용자가 해당 칸으로 이동 가능한지 확인
- [ ] move
  - [ ] 사용자 이동 정보 저장
  - [ ] round + 1
- [ ] retry
  - [ ] 사용자 이동 정보 초기화
  - [ ] 도전 정보 + 1
- [ ] makeProgressMsg
  - [ ] 현재 사용자 이동 정보를 메세지로 변환하여 리턴

Validator

- [ ] bridgeLength
  - [ ] 빈 값
  - [ ] 문자인지
  - [ ] 3~20 사이의 숫자
- [ ] move
  - [ ] 빈 값
  - [ ] U 또는 D
- [ ] retry
  - [ ] 빈 값
  - [ ] R 또는 Q

### View

InputView

- [ ] readBrigeSize
  - [ ] 다리 길이 입력
- [ ] readMoving
  - [ ] 이동 방향 입력
- [ ] readGameCommand
  - [ ] 재시도/종료 입력

OutputView

- [ ] printMap
  - [ ] 중간 결과 출력
- [ ] printResult
  - [ ] 최종 진행 및 결과 출력

### Controller

bridgeController

- [ ] inputController에 다리 길이 입력 요청
  - [ ] 리턴 값을 활용하여 다리 생성
- [ ] inputController에 이동할 칸 입력 요청
  - [ ] 해당 칸으로 이동 가능한 지 확인
    - [ ] 이동 가능 → moveSucceedProcess
    - [ ] 이동 불가능 → moveFailProcess
- [ ] 종료 메세지 요청
  - [ ] 출력 요청

moveFailProcess

- [ ] 이동 가능 X ) 재시도 입력 요청
  - [ ] 재시도 ) 초기화 후 false 반환
  - [ ] 재시도 X ) true 반환

moveSucceedProcess

- [ ] 이동 가능 ) 이동 후 완주 했는지 요청
  - [ ] 완주 ) true 반환
  - [ ] 완주 X ) false 반환

getGameOverMsg

- [ ] bridgeGame으로 부터 종료 메세지 받아오는 함수

inputController

- [ ] bridgeSize
  - [ ] 다리 길이 입력 요청
  - [ ] 입력값 검증
  - [ ] 옳은 값이 들어올 때까지 재시도
- [ ] move
  - [ ] 이동할 칸 입력 요청
  - [ ] 입력 값 검증
  - [ ] 옳은 값이 들어올 때까지 재시도
- [ ] retry
  - [ ] 재시도 할 지 요청
  - [ ] 입력 값 검증
  - [ ] 옳은 값이 들어올 때까지 재시도

### constants.js

- [ ] DEFULT_MSG

  - [ ] START : `다리 건너기 게임을 시작합니다.\n`
  - [ ] BRIDGE_SIZE : `다리의 길이를 입력해주세요.\n`
  - [ ] MOVE : `\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n`
  - [ ] RETRY : `\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`
  - [ ] RESULT : `최종 게임 결과\n`
  - [ ] FINISH : `게임 성공 여부:`
  - [ ] TRIAL : `총 시도한 횟수:`

- [ ] BRIDGE_SIZE

  - [ ] MIN : `3`
  - [ ] MAX : `20`

- [ ] MSG

  - [ ] START : `[`
  - [ ] DELIMITER : `|`
    - [ ] END : `]`

- [ ] MOVE

  - [ ] UP : `U`
  - [ ] DOWN : `D`

- [ ] GAME_OVER

  - [ ] RETRY : `R`
  - [ ] QUIT : `Q`

- [ ] ERROR
  - [ ] EMPTY : `[ERROR] 입력 값이 비어있습니다. 값을 입력해주세요.`
  - [ ] OUT_OF_RANGE : `[ERROR] 값이 범위에 맞지 않습니다. 다시 입력해주세요.`
  - [ ] NAN : `[ERROR] 값이 숫자가 아닙니다. 숫자만 입력해주세요.`
  - [ ] UNVALID_VALUE : `[ERROR] 값이 올바르지 않습니다. 다시 입력해주세요.`

## 프로젝트 구조

## Test

- [ ] 기본 테스트 통과

### 추가한 테스트

- [ ]
