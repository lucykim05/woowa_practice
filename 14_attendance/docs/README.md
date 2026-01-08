## 출석 관리 시스템

2025년 12월 한 달 동안 우테코 크루들의 출석을 관리하는 프로그램

## 설계

각 기능의 주요 이름을 담은 파일들을 Controller, Validator, Model폴더에 생성하여 해당 기능을 분리하여 구현하는 것을 목표로 설계했다.

![unnamed](https://github.com/user-attachments/assets/f6107394-8edc-4d08-b974-4a04970d069d)

## 프로젝트 구조

```
📦src
 ┣ 📂Controller
 ┃ ┣ 📜AttendanceController.js
 ┃ ┗ 📜SystemController.js
 ┣ 📂Model
 ┃ ┣ 📂Validators
 ┃ ┃ ┗ 📜AttendanceValidator.js
 ┃ ┣ 📜Info.js
 ┃ ┗ 📜Parser.js
 ┣ 📂Utils
 ┃ ┣ 📜DateInfo.js
 ┃ ┗ 📜readFile.js
 ┣ 📂View
 ┃ ┣ 📜InputView.js
 ┃ ┗ 📜OutputView.js
 ┣ 📜App.js
 ┣ 📜constants.js
 ┗ 📜index.js
```

## 구현 기능 목록 및 기능 상세 설명

### Model

Info

- [x] csv파일로 들어온 크루의 정보 또는 새롭게 출석을 진행하는 크루의 정보를 저장하고 있는 객체. 아래는 저장하는 형태. 크루의 이름을 key로 저장하고 value는 배열 형태로 저장하여 해당 크루의 출석 정보를 객체 값으로 넣음.

```
  [이름]  : [
	 {
    DATE: {
      MONTH: 0,
      DAY: 0,
      TIME: {
        HOUR: "",
        MINUTE: "",
      },
    },
    STATUS: "",
  },
  {
	  ...
	 },

	];
```

Parser

- [x] rawFile : csv 파일을 읽었을 때, 줄바꿈 문자를 기준으로 split 하고 필요없는 가장 첫번째 값 (nickname,datetime), 그리고 마지막 값(’’)을 삭제한 채 리턴하는 함수
- [x] parse : 인자로 파싱할 문자열과 구분자를 넣으면 해당 구분자를 기준으로 split 하는 함수

Validators

- [x] AttendanceValidator
  - [x] validDate : 오늘 날짜가 휴일 (토요일/일요일) 또는 공휴일인지 검증
  - [x] validName : 입력한 이름이 공백인지 / 크루 목록에 없는 이름인지 / 이미 출석을 마친 크루인지 검증
    - [x] isAlreadyFinished : 이미 출석을 마친 크루인지 판별하여 boolean 값 리턴
  - [x] validTime : 입력한 시간(시간, 분)이 공백인지 / 범위에 맞는지 검증

### View

InputView

- [x] option : 1부터 4까지의 숫자와 Q 중에서 사용자의 응답을 받아오는 함수
- [x] name : 출석을 확인할 크루의 이름 입력을 받는 함수
- [x] time : 출석을 등록할 크루의 출석 시간을 입력 받는 함수

OutputView

- [x] start : 시작 메세지 출력
- [x] error : 에러 메세지 출력
- [x] attendance : 출력을 완료한 크루의 메세지 출력

### Controller

SystemController

- [x] initialize : csv 파일을 읽고 기존 크루들의 출석 정보를 파싱하여 프로그램을 시작하기 전 초기화
- [x] start : 본격적인 프로그램의 시작 부분, getInput의 입력값에 따라 기능 수행 또는 종료를 실행
- [x] process : getInput으로 받은 입력값에 해당하는 기능을 수행하도록 요청
- [x] saveData : 배열로 들어온 크루의 정보를 파싱하여 Info 객체에 저장
- [x] checkStatus : 현재 시간대를 기준으로 출석/지각/결석 판단
- [x] getTodayMsg : 가장 첫 줄에 보이는 시작 메세지 생성
- [x] getInput : 사용자에게 1~4의 수 또는 Q의 응답을 요청

AttendanceController

- [x] process : 출석 확인 과정을 진행
- [x] getInput : 출석을 진행할 크루의 이름 입력 요청
- [x] getTime : 해당 크루가 출석한 시간 입력 요청
- [x] save : Info에 새롭게 출석을 한 크루의 정보 저장
- [x] printMsg : 출석이 완료된 크루들에 한해 해당 크루의 출석 저장 상태를 나타내는 메세지 생성 후 출력 요청

EditController

- [ ]

CrewController

- [ ]

DismissController

- [ ]

### Utils

DateInfo

- [x] getYear() : 지금 년도를 4자리수로 반환
- [x] getMonth() : 지금 월을 2자리수로 반환 (한자리 수의 월일 시 0으로 채움)
- [x] getDayNumber : 월과 마찬가지로 2자리수로 일수를 반환
- [x] getDayName : 요일을 반환
- [x] dateDateAsString : 현재 날짜를 ‘mm월 dd일 0요일’ 형식으로 메세지 반환

readFile

- [x] 인자로 URL을 제공하면 해당 파일을 읽어오는 기능

### constants.js

DEFAULT

- [x] START: "1. 출석 확인\n2. 출석 수정\n3. 크루별 출석 기록 확인\n4. 제적 위험자 확인\nQ. 종료\n
- [x] NAME: "\n닉네임을 입력해 주세요.\n"
- [x] TIME: "등교 시간을 입력해 주세요.\n"

- [x] FILE_URL = "../../public/attendances.csv";
- [x] FINISH = "Q";
- [x] DAY_NAME_LIST = ["일", "월", "화", "수", "목", "금", "토"];

HOUR

- [x] MIN : 0
- [x] MAX : 23

MINUTE

- [x] MIN : 0
- [x] MAX : 59

ERROR

- [x] EMPTY: "[ERROR] 값이 비었습니다. 다시 입력해주세요."
- [x] FILE: "[ERROR] 파일 이름을 읽을 수 없습니다."
- [x] HOLIDAY: "은 등교일이 아닙니다."
- [x] NAME: "[ERROR] 등록되지 않은 닉네임입니다.\n"
- [x] WRONG: "[ERROR] 잘못된 형식을 입력하였습니다."
- [x] ATTENDANCE_DONE: "[ERROR] 이미 출석을 완료했습니다. 출석 시간을 변경할 경우, 수정 기능을 이용해주세요."

## Test

- [ ] 기본 테스트 통과
  - [ ] 잘못된 형식 예외 테스트 (구현 완료)
  - [ ] 등록되지 않은 닉네임 예외 테스트 (구현 완료)
  - [ ] 주말 또는 공휴일 예외 테스트 (구현 완료)
  - [ ] 출석 확인 기능 테스트 (구현 완료)
  - [ ] 출석 수정 및 크루별 출석 기록 확인 기능 테스트

### 소감문

처음에 설계는 예상 외로 일찍 끝나서 약 30분만에 구현에 비교적 빠르게 들어갈 수 있었다. 하지만 요구사항이 많고 로직이 쉽지만은 않아서 스스로 헷갈리는 것을 방지하기 위해 코딩과 동시에 나도 모르게 리팩토링을 하다보니 아쉽게도 마지막 테스트 요구사항을 구현하지 못했다. 구현하다 계속해서 (intermediate value) is not iterable라는 오류가 떠서 매우 곤란했다. 어디서 오류가 났는지 디버거를 통해 한 줄씩 디버깅을 해봐도 자꾸 특정 부분에서 바로 꺼지길래 당황스러워 많은 시간을 소비했다. 해당 오류에 대해 디버깅과 구글링을 40분 정도 하다보니 코드를 작성하다 자꾸 함수 뒤에 () 가 안 쳐진 이슈로 값이 아닌 variable 전체가 넘어가서 생긴 오류였다는 것을 알게 되었다. 기능 구현을 일부 못했지만 그래도 오류를 찾고, 결국에는 작동하는 프로그램을 만들었다는 점에서 매우 기쁘다. 특히, 이번 구현에서는 class를 사용하지 않고 구현해냈다는 점에서 스스로에게 매우 기특했다. 프리코스 때부터 줄곧 class를 사용해왔는데, 코드 리뷰를 통해 내가 왜 어떤 문법을 사용했는지 물어보는 질문에 대답하다보니 어느 순간부터 내가 왜 이걸 사용해야 하지? 라는 질문을 많이 하게 됐다. c기존에는 class를 그냥 유사한 function을 모아두거나 붕어빵 틀처럼 유사한 틀을 필요로 하는 변수들을 초기화하여 사용하기 위해 사용 했었는데, 코드가 복잡해질 수록 class의 개수는 늘어나고 복잡해지는 것도 문제였지만 결합성이 너무 강해져서 리팩토링 하기가 어려웠다. 이 문제를 프리코스 오픈미션 떄 겪으면서 클린 코드를 작성하자는 큰 목표가 class 사용을 최소화 하고 결합도를 낮추는 코드를 짜자는 세부적인 목표로 구체화되었다. 최종 코딩테스트를 준비하면서도 자꾸만 습관적으로 class를 사용했는데, 최종 구현에서 완벽하지는 않지만 스스로 목표한 부분을 해냈다는 점에서 스스로가 매우 대견했다.
