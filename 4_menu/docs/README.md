## 점심 메뉴 추천

각 코치마다 한 주의 점심 메뉴를 추천하는 프로그램. 카테고리는 2회 이상 중복되지 않으며, 못 먹는 음식은 각 코치당 2개까지 선정 가능하다.

## 설계

![IMG_9161.jpg](attachment:42e23560-c294-43f0-81d3-2dd749bf5d07:IMG_9161.jpg)

## 기능 상세 설명

### Model

### View

### Controller

## 구현 기능 목록

### Model

Validator

- [x] coach
  - [x] 빈 값
  - [x] 2명 이상 5명 이하의 인원
  - [x] 각 이름이 2글자 이상 4글자 이하
- [ ] menu
  - [ ] 종류가 2개 초과
  - [ ] 추천 메뉴에 해당하지 않는 음식

recommendSystem

- 인스턴스
  - [ ] 메뉴 객체 ( SAMPLE 가공하여 저장 )
  - [ ] 코치 객체를 저장하고 있는 배열
  - [ ] 카테고리 배열
- 메소드
  - [ ] initializeMenu
    - [ ] SAMPLE 값 가공하여 저장
  - [ ] pickRandomCategory
    - [ ] 랜덤 카테고리 선정
  - [ ] pickRandomMenu
    - [ ] 랜덤 메뉴 선정
  - [ ] saveCategory
    - [ ] 이미 선택된 카테고리들 중 2회 초과하여 겹친 카테고리가 없다면 저장

Coach

- 인스턴스
  - [ ] 이름
  - [ ] 못 먹는 메뉴 배열
  - [ ] 추천 메뉴 배열
- 메소드
  - [ ] checkMenu
    - [ ] 인자로 넘어 온 메뉴가 못 먹는 메뉴에 해당하는지 확인
  - [ ] saveMenu
    - [ ] 이미 선택된 메뉴가 아니고, 못 먹는 메뉴에 해당하지 않는다면 저장

### View

InputView

- [x] coach : 코치 이름 입력
  - [x] parser로 값 1차 검증하여 넘김
- [ ] dontEat : 못 먹는 메뉴 입력
  - [ ] parser로 값 1차 검증하여 넘김

OutputView

- [x] startMsg : 시작 메세지 출력
- [x] error : 에러 출력
- [ ] result : 결과 출력

### Controller

lunchController.js

- [x] 코치 이름 목록 요청
- [ ] 코치 인스턴스 선언
- [ ] RecommendSystem 인스턴스 선언
  - [ ] 코치와 SAMPLE을 생성자 인자로 넣음
- [ ] 못 먹는 메뉴 목록 요청
- [ ] RecommendSystem의 추천 로직 실행
- [ ] 결과 받기
- [ ] 결과 출력

ReadInput

- [x] coachList
  - [x] 코치 이름 입력 요청
    - [x] 코치 이름 검증 요청
    - [x] 오류가 있을 시 재입력 요청
- [ ] dontEat
  - [ ] 코치마다 못 먹는 메뉴 입력
    - [ ] 메뉴 검증 요청
    - [ ] 오류가 있을 시 재입력 요청
    - [ ] 코치 객체에 값 저장

### Utils

- [x] parser.js : 배열의 값을 `,`로 split 하여 리턴하는 함수

### constants.js

- DAYS : 5
- CATEGORY : {1:’일식’, 2:’한식’, 3:’중식’, 4:’아시안’, 5:’양식’};
- CATEGORY_LIMIT : 2
- COACH_COUNT
  - MIN : 2
  - MAX : 5
- COACH_NAME_LIMIT
  - MIN : 2
  - MAX : 4
- MENU_LIMIT
  - MIN : 0
  - MAX : 2
- INPUT_MSG
  - START : `점심 메뉴 추천을 시작합니다.\n`
  - COACH : `코치의 이름을 입력해 주세요. (, 로 구분)\n`
  - DONT_EAT : `(이)가 못 먹는 메뉴를 입력해 주세요.\n`
- OUTPUT_MSG
  - DAYS : `[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]\n`
  - CATEGORY :
- ERROR_MSG
  - EMPTY : `[ERROR] 입력 값이 비어있습니다. 다시 입력해주세요.`
  - NAME_OUT_OF_RANGE : `[ERROR] 코치 이름은 2글자 이상, 4글자 이하여야 합니다.`
  - COACH_COUNT_OUT_OF_RANGE : `[ERROR] 코치는 2명 이상, 5명 이하여야 합니다.`
  -
