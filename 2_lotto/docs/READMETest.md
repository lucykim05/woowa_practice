## 로또

입력한 금액만큼 로또를 발행하여 수익률을 출력하는 프로그램

## 설계

[설계 방향 및 의도]

<프로그램 순서>

금액 입력 → 검증 → 금액을 1000원으로 나누어서 해당 몫만큼 랜덤 숫자 생성 하여 출력 → 당첨 번호 입력 → 검증 → 보너스 번호 입력 → 검증 → 모든 로또 한 줄 마다 당첨 번호 비교 → 3개 이상 맞을 시 저장 → 수익률 계산 → 결과 출력

<테스트 기능>

ApplicationTest

- 정상 작동 경우 (로또 발행, 당첨결과, 수익률 출력)
- 구입 금액으로 숫자 아닌값 입력 → 에러

LottoTest

- 로또 번호가 6개 넘어가면 에러 발생
- 로또 내부에 중복된 숫자가 있을 시 예외 발생

<구현 계획>

1. 정상 작동 하는 경우를 우선 구현
   1. 검증은 구입금액 테스트와 로또 내부 중복 숫자 테스트 통과를 위해 두개 만 구현
2. 구입 금액 검증 추가
3. 당첨 번호 검증 추가
4. 보너스 번호 검증 추가
5. validator 단위 테스트 추가

---

Lotto.js

- 생성자로 랜덤 생성 & 오름차순 배열한 번호 입력
- #validate 함수에 로또 번호 검증 함수 연결
- 당첨 번호 & 보너스 번호와 비교하여 당첨 개수 확인 하는 기능

## 프로젝트 구조

## 기능 상세 설명 및 구현 기능 목록

### Model

LottoSystem : 로또 번호에 대한 처리를 담당하는 class

- class를 export 하는 대신 lottoSystem 인스턴스를 하나 만들고 export 하여 class에 직접적인 접근을 방지
- 로또 결과를 저장하는 result 객체는 LottoSystem 내부에서만 존재하도록 하여 외부 접근을 방지하고, 객체 형태로 두어 가독성을 높임
- [x] #calculateProfit : result의 맞은 개수와 구입금액을 바탕으로 수익률을 계산하여 리턴
- [x] makeLotto : 자동 생성된 번호 배열을 사용하여 Lotto class 인스턴스를 생성. Lotto class를 로또 한 줄 종이처럼 활용함.
- [x] randResult : 자동 생성된 번호들을 출력하기 위해 메세지 형태로 modify
- [x] match : 당첨 번호와 보너스 번호를 인자로 입력하여 lotto 클래스의 match 메소드를 통해 당첨 개수와 보너스 번호 일치 여부를 받아옴. 해당 리턴 값을 토대로 result 객체 리터럴에 결과를 저장 .
- [x] getResult : 맞은 개수와 수익률을 보여주는 최종 결과 메세지를 생성

Validator

- [ ] price : 구입 금액 입력 값을 검증함
  - [x] 빈 값인지
  - [x] 숫자인지
  - [ ] 0 이상의 양수인지
  - [ ] 1000으로 나누어 떨어지는지
  - [ ] 100,000원 이하의 값인지
- [ ] lotto : 자동 생성된 로또 번호 값을 검증함
  - [ ] 빈값이 존재 하는지
  - [ ] 숫자가 6개인지
  - [ ] 중복 값이 존재하는지
  - [ ] 1~45 사이의 범위에 존재하는지
- [ ] winningNum : 당첨 번호 입력 값을 검증함
  - [ ] 빈값이 존재 하는지
  - [ ] 숫자가 6개인지
  - [ ] 중복 값이 존재하는지
  - [ ] 1~45 사이의 범위에 존재하는지
- [ ] bonusNum : 보너스 번호 입력 값을 검증함
  - [ ] 빈 값인지
  - [ ] 숫자인지
  - [ ] 1~45 사이의 범위에 존재하는지
  - [ ] 당첨 번호와 중복되는지

### View

InputView

- [x] buy : 구입 금액 입력 값을 받음
- [x] winning : 당첨 금액 입력 값을 받음
- [x] bonus : 보너스 번호 입력 값을 받음

OutputView

- [x] random: 자동 생성된 로또 번호를 한 줄씩 출력
- [x] result : 결과 메세지 한 줄씩 출력

### Controller

LottoController

- [x] start() : 로또 발행부터 시작하여 결과 출력까지 모든 과정을 관리 하는 메소드
- [x] getPrice() : 사용자로부터 구입 금액 입력을 요청하고, 해당 값을 검증한 뒤 1차적으로 값을 Number로 modify 하여 리턴
- [x] getWinningNum() : 사용자로부터 당첨 번호를 입력 받고 검증하고 1차적으로 값을 파싱하여 리턴
- [x] getBonusNum() : 사용자로부터 보너스 번호를 입력 받고 검증하여 1차적으로 값을 Number로 modify하여 리턴

### Utils

Parser

- [x] comma : 인자를 `,`를 기준으로 split하고 trim하여 리턴

### Lotto

- [x] getNumberMsg : 자동 생성된 로또 번호들을 출력 결과에 맞게 메세지로 변환
- [x] match : 당첨 번호와 보너스 번호를 인자로 받고, 맞은 개수를 비교하여 리턴

### constants.js

DEFAULT

- [x] PRICE: "구입금액을 입력해 주세요.\n",
- [x] RANDOM: "개를 구매했습니다."
- [x] WINNING: "\n당첨 번호를 입력해 주세요.\n"
- [x] BONUS: "\n보너스 번호를 입력해 주세요.\n"
- [x] RESULT: "당첨 통계\n---\n"
- [x] PROFIT:
  - [x] START: "총 수익률은 "
  - [x] END: "%입니다."

LOTTO

- [x] COUNT: 6 (로또 숫자 개수)
- [x] PRICE: 1000 (로또 한 장 가격)
- [x] RANGE: (로또 번호 하나의 범위)
  - [x] MIN: 1
  - [x] MAX: 45
- [x] MATCH:
  - [x] [맞은 개수 string] (ex) THREE)
    - [x] COUNT : 맞은 개수 number
    - [x] PRIZE : 당첨금
    - [x] MSG : 마지막 결과 메세지

ERROR

- [x] EMPTY: "[ERROR] 값이 비었습니다."
- [x] LOTTO_OUT_OF_RANGE: "[ERROR] 로또 번호는 6개여야 합니다."
- [x] NAN: "[ERROR] 입력 값이 숫자가 아닙니다."
- [x] LOTTO_SAME_NUM: "[ERROR] 중복된 숫자가 들어있습니다. ",
- [ ] NOT_POSITIVE : “[ERROR] 양수가 아닙니다.”
- [ ] NOT_DIVISIBLE : ”[ERROR] 1000원으로 나누어 떨어지지 않는 수입니다.”
- [ ] LOTTO_PRICE_EXCEED : “[ERROR] 로또는 1000원 이상 10만원 이하로 구매 가능합니다.”
- [ ] NUMBER_OUT_OF_RANGE : “[ERROR] 번호는 1~45 사이의 숫자여야 합니다.”
- [ ] BONUS_SAME_NUM : “[ERROR] 보너스 번호가 당첨번호와 중복됩니다.”

## Test

- [x] 기본 테스트 통과

### 추가한 테스트

- [ ]
