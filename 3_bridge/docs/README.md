위, 아래 둘 중 하나의 칸만 건너서 다리를 끝까지 건너가는 프로그램

## 설계

## 기능 상세 설명

### Model

### View

### Controller

## 구현 기능 목록

### Model

- [ ] BridgeGame 클래스
  - [ ] constructor : 다리 생성 로직
    - [ ] BridgeMaker 객체 활용하여 배열로 선언 ( 다리 두 개 생성 )
  - [ ] move() : 이동 시도에 대한 로직
  - [ ] retry() : 재시도 로직 → 다리 초기화

validator

- [ ] 다리 검증 로직
  - [ ] 다리 길이 : bridgeSizeValidator()
  - [ ] 이동할 칸 : moveValidator()
  - [ ] 라운드 종료 응답 : roundOverValidator()

### View

- [ ] InputView
  - [ ] readBridgeSize() : 다리 길이 입력
  - [ ] readMoving() : 이동할 칸 입력
  - [ ] readGameCommand() : 라운드 종료 응답 입력
- [ ] OutputView
  - [ ] printMap() : 다리 진행 결과 출력
  - [ ] printResult() : 최종 결과 출력

### Controller

- [ ] bridgeGameController 함수
  - [x] 시작 메세지 출력 요청
  - [ ] 다리 길이 입력 요청 : getBridgeSize ()
    - [ ] 다리 생성 요청
  - [ ] 이동할 칸 입력 요청
  - [ ] 이동 가능 여부 판별 요청
    - [ ] 만약 다리 건너기 성공 시 gameOver 함수 실행
    - [ ] 성공 시 이동할 칸 입력 요청
    - [ ] 실패 시 라운드 종료 함수 실행
- [ ] getBridgeSize 함수 : 다리 길이 입력

  - [x] 다리 길이 입력 요청
  - [ ] 다리 길이 검증 요청
    - [ ] valid한 값을 얻을 때까지 반복

- [ ] getMove 함수 : 이동할 칸 입력

  - [ ] 이동할 칸 입력 요청
  - [ ] 입력 검증 요청
    - [ ] valid한 값을 얻을 때까지 반복

- [ ] roundOver 함수 : 라운드 종료 시 실행 로직

  - [ ] 라운드 횟수 저장 요청
  - [ ] 라운드 종료 메세지 출력
  - [ ] isRoundOver 함수 실행
    - [ ] 리턴 값이 `R` 일 시 이동할 칸 입력부터 재시작 ( 다리 길이는 유지, 진행 사항은 초기화)
    - [ ] 리턴 값이 `Q`일 시 gameOver() 실행

- [ ] isRoundOver 함수 : 라운드 종료에 따른 사용자 입력

  - [ ] 사용자 응답 입력 요청
  - [ ] 사용자 응답 검증 요청
    - [ ] valid한 값을 얻을 때까지 반복

- [ ] gameOver() : 최종 결과 출력
  - [ ] 최종 게임 결과 메세지 출력
  - [ ] 다리 진행 상황 출력
  - [ ] 게임 성공 여부 출력
  - [ ] 총 시도 횟수 출력

### BridgeMaker

- [ ] makeBridge(다리 사이즈, 생성된 랜덤 숫자) : 다리 생성 로직

### **BridgeRandomNumberGenerator**

- [ ] BridgeRandomNumberGenerator
  - [ ] generate() : 0과 1 중 하나의 값을 반환한다.

### constants.js

- [ ] 입력 메세지
  - [x] 다리 길이 입력 : `다리의 길이를 입력해주세요.`
  - [ ] 이동할 칸 입력 : `이동할 칸을 선택해주세요. (위: U, 아래: D)`
  - [ ] 게임 재시작 여부 입력 : `게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)`
- [ ] 출력 메세지

  - [x] 시작 메세지 : `다리 건너기 게임을 시작합니다.\n`
  - [ ] 최종 결과 : `최종 게임 결과`
  - [ ] 성공 여부 : `게임 성공 여부:`
  - [ ] 시도 횟수 : `총 시도한 횟수:`

- [ ] 에러메세지
  - [ ] EMPTY : `[ERROR] 값이 비어있습니다. 다시 입력해주세요.`
  - [ ] NAN : `[ERROR] 숫자가 아닙니다. 3부터 20 사이의 숫자를 입력해주세요.`
  - [ ] OUT_OF_RANGE : `[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.`
  - [ ] UNVALID_INPUT: `[ERROR] 알 수 없는 값입니다. 다시 입력해주세요. (소문자 불가)`

## 프로젝트 구조

## Test

- [ ] 기본 테스트 통과

### 추가한 테스트

- [ ]

## 리팩토링
