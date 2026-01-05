# README.md

## 점심 메뉴 추천

한 주의 점심 메뉴를 추천해 주는 서비스다.

## 설계
![IMG_9186](https://github.com/user-attachments/assets/3e1799f2-e630-4a6a-9a87-5d1211846c00)



## **기능 상세 설명 및 구현 기능 목록**

### Model

LunchSystem

- [x] coach 인스턴스 객체 저장
- [x] 랜덤 카테고리 선정 로직
- [x] 코치 별 메뉴 선정 로직
- [x] 결과 메세지 생성

Coach

- [x] 못 먹는 음식 저장
- [x] 인자로 카테고리가 넘어오면 카테고리에 해당하는 음식 뽑는 로직
- [x] 해당 코치의 일주일 메뉴 추첨 결과 메세지 생성

Validator

- [x] coach
  - [x] 빈 값
  - [x] 코치 인원수 2명 이상 5명 이하
  - [x] 코치 이름 2글자 이상 글자 이하
- [x] cantEat
  - [x] 빈 값이면 바로 리턴
  - [x] 음식 2개 이하
  - [x] 목록에 포함되는 음식인지

### View

InputView.js

- [x] coach : 코치 이름 입력
- [x] cantEat : 코치 별 못 먹는 음식 입력

OutputView.js

- [x] start : 시작 메세지 출력
- [x] error: 에러 메세지 출력
- [x] result : 결과 메세지 출력

### Controller

lunchController.js

- [x] 시작 메세지 출력
- [x] LunchSystem 선언 후 카테고리 선정 요청
- [x] 코치 이름 입력 요청
  - [x] 코치 별 Coach 인스턴스 객체 생성 후 lunchsystem에 저장
- [x] 코치 못 먹는 음식 요청
  - [x] 목록 리턴 시 해당 인스턴스 객체에 저장
- [x] LunchSystem의 추천 로직 실행
- [x] 결과 메세지 생성 요청
- [x] 결과 메세지 출력

getCoachList

- [x] InputView.coach에게 코치 이름 목록 요청
- [x] Validator.coach에 코치 이름 목록 검증 요청
- [x] 옳은 값이 아닐 시 재입력

getCantEat

- [x] InputView.cantEat에 해당 코치가 못 먹는 음식 목록 요청
- [x] Validator.cantEat에 목록 검증 요청
- [x] 옳은 값이 아닐 시 재입력

### App

- [x] 샘플 값 객체→배열로 변환 후 상수화

### Utils

commaParser

- [x] `,`으로 split하기

### constants.js

- [x] MENU_SAMPLE
- [x] PARSING_DELIMITER : `,`
- [x] DAYS = 5
- [x] CATEGORY_LIMIT = 2
- [x] CANT_EAT_LIMIT = 2
- [x] CATEGORY =[ 일식, 한식, 중식, 아시안, 양식 ]

COACH_LIMIT

- [x] MIN : 2
- [x] MAX : 5

COACH_NAME_LIMIT

- [x] MIN : 2
- [x] MAX : 4

DEFAULT_MSG

- [x] START : `점심 메뉴 추천을 시작합니다.`
- [x] COACH_LIST : `\n코치의 이름을 입력해 주세요. (, 로 구분)\n`
- [x] CANT_EAT : `\n(이)가 못 먹는 메뉴를 입력해 주세요.\n`
- [x] RESULT : `메뉴 추천 결과입니다.\n`
- [x] FINISH : `\n추천을 완료했습니다.`
- [x] CATEGORY_LIMIT = 2

MSG_TOOL

- [x] START : `[`
- [x] DELIMITER : `|`
- [x] END : `]`

ERROR

- [x] EMPTY : ‘[ERROR] 입력 값이 비었습니다. 다시 입력해주세요.’
- [x] COACH_OUT_OF_RANGE : ‘[ERROR] 코치들의 수는 반드시 2명 이상 5명 이하여야 합니다.’
- [x] NAME_OUT_OF_RANGE : ‘[ERROR] 이름의 길이는 반드시 2글자 이상 4글자 이하여야 합니다.’
- [x] MENU_OUT_OF_RANGE: "[ERROR] 못 먹는 메뉴는 2가지 이하만 입력할 수 있습니다."
- [x] MENU_NO_EXIST: "[ERROR] 해당 메뉴는 존재하지 않습니다.”

## 프로젝트 구조

```
📦src
 ┣ 📂Controller
 ┃ ┗ 📜lunchController.js
 ┣ 📂Model
 ┃ ┣ 📜Coach.js
 ┃ ┣ 📜LunchSystem.js
 ┃ ┗ 📜Validator.js
 ┣ 📂Utils
 ┃ ┗ 📜parser.js
 ┣ 📂View
 ┃ ┣ 📜InputView.js
 ┃ ┗ 📜OutputView.js
 ┣ 📜App.js
 ┣ 📜constants.js
 ┗ 📜index.js
```

## Test

- [x] 기본 테스트 통과
