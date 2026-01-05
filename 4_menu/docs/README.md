# README.md

## 점심 메뉴 추천

한 주의 점심 메뉴를 추천해 주는 서비스다.

## 설계

![IMG_9186.jpg](attachment:77635341-dcb7-4651-9996-9aca2b56d6af:IMG_9186.jpg)

## 기능 상세 설명 및 구현 기능 목록

### Model

LunchSystem

- [ ] coach 인스턴스 객체 저장
- [ ] 랜덤 카테고리 선정 로직
- [ ] 코치 별 메뉴 선정 로직
- [ ] 결과 메세지 생성

Coach

- [ ] 못 먹는 음식 저장
- [ ] 인자로 카테고리들이 넘어오면 각 카테고리에 해당하는 음식 뽑는 로직
- [ ] 해당 코치의 일주일 메뉴 추첨 결과 메세지 생성

Validator

- [ ] coach
  - [ ] 빈 값
  - [ ] 코치 인원수 2명 이상 5명 이하
  - [ ] 코치 이름 2글자 이상 글자 이하
- [ ] cantEat
  - [ ] 빈 값이면 바로 리턴
  - [ ] 음식 2개 이하
  - [ ] 목록에 포함되는 음식인지

### View

InputView.js

- [ ] coach : 코치 이름 입력
  - [ ] 이름 1차 파싱 후 리턴
- [ ] cantEat : 코치 별 못 먹는 음식 입력

OutputView.js

- [ ] startMsg : 시작 메세지 출력
- [ ] result : 결과 메세지 출력

### Controller

lunchController.js

- [ ] 시작 메세지 출력
- [ ] LunchSystem 선언 후 카테고리 선정 요청
- [ ] 코치 이름 입력 요청
  - [ ] 코치 별 Coach 인스턴스 객체 생성 후 lunchsystem에 저장
- [ ] 코치 못 먹는 음식 요청
  - [ ] 목록 리턴 시 해당 인스턴스 객체에 저장
- [ ] LunchSystem의 추천 로직 실행
- [ ] 결과 메세지 생성 요청
- [ ] 결과 메세지 출력

getCoachList

- [ ] InputView.coach에게 코치 이름 목록 요청
- [ ] Validator.coach에 코치 이름 목록 검증 요청
- [ ] 옳은 값이 아닐 시 재입력

getCantEat

- [ ] InputView.cantEat에 해당 코치가 못 먹는 음식 목록 요청
- [ ] Validator.cantEat에 목록 검증 요청
- [ ] 옳은 값이 아닐 시 재입력

### App

- [ ] 샘플 값 객체→배열로 변환 후 상수화

### Utils

parser

- [ ]

### constants.js

- [ ] MENU_SAMPLE
- [ ] PARSING_DELIMITER : `,`

DEFAULT_MSG

- [ ] START : `점심 메뉴 추천을 시작합니다.`
- [ ] COACH_LIST : `\n코치의 이름을 입력해 주세요. (, 로 구분)\n`
- [ ] CANT_EAT : `\n(이)가 못 먹는 메뉴를 입력해 주세요.\n`
- [ ] RESULT : `메뉴 추천 결과입니다.\n`
- [ ] FINISH : `\n추천을 완료했습니다.`

MSG_TOOL

- [ ] START : `[`
- [ ] DELIMITER : `|`
- [ ] END : `]`
