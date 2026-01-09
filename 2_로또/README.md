# lotto

## 설계

일단 프로그램 순서에 대해서 생각해보면 다음과 같다.

1. 구입 금액 입력
2. 로또 발행
3. 로또 출력
4. 당첨 번호 입력
5. 보너스 번호 입력
6. 로또 결과 도출
7. 결과 출력

역할 분리를 하기 전에 사용자와 내부로직이 직접적으로 상호작용하는 Controller의 역할에 대해서 먼저 정의 해보았다.

### GameController

- 구입 금액 입력 -> 검증
- 당첨 번호 입력 -> 검증
- 보너스 번호 입력 -> 검증
- 게임 로직 실행
- 결과 출력

다음과 같이 정의된 controller에 맞춰서 필요한 게임 로직을 담은 LottoGame 객체를 추가로 생성하기로 하였다.

### LottoGame

- 결과를 담을 map, total 생성
- 금액 입력 받아 저장
- 로또 발행 하여 저장, return
- 당첨 번호 입력 받아 Lotto마다 결과 구함
- 결과 바탕으로 수익률 구함
- 결과 return

일단 위의 로직부터 하나하나 살펴보면 입력은 controller에서 진행하고 있으며, 발행의 경우에는 LottoGame 내부에서 하기보다는 새로운 파일을 만들어서 로또 발행만을 담당하도록 하는 것이 좋겠다라는 생각을 하게 되었다.

### LottoMaker

- 금액 입력 받아 개수 구함
- 개수 만큼 로또 발행 로직 반복
- 로또 발행
  - Random 메서드 사용 -> 랜덤한 숫자 가져옴
  - 해당 숫자를 담은 new Lotto 생성
  - 배열에 담아 return

로또를 담은 배열이 return되었고, LottoGame에 저장되었기 때문에 이 Lotto 배열들을 돌며 번호를 전달 -> 결과를 도출하도록 해야한다. 이 로직을 담당하는 추가 파일을 생성하였다.

### LottoResult

- 당첨번호, 보너스 번호 저장
- 로또 결과 도출 로직
  - 로또 번호(하나의 로또) 입력 받음
  - 해당 로또에 당첨번호가 몇개 있는지 확인
  - 보너스 번호가 있는지 확인
  - 등수 계산하여 return

return된 등수는 LottoGame에 있는 map에 저장하게 된다. 그리고 마지막으로 수익률 계산을 위한 Calculator를 생성하였다.

### Calculator

- 결과 map과 금액 전달 받음
- map.entries()
- 각 배열을 돌며 key에 해당되는 금액과 개수를 곱함
- 그 total과 금액으로 수익률 계산
- 수익률 return

위의 내용들을 바탕으로 정리한 폴더 구조는 다음과 같다.

```
src/
├── constants/
│   └── constants.js       # 상수 (프롬프트, 에러, 기본 상수 등)
│
├── controller/
│   └── GameController.js      # 전체 게임 흐름 제어
│
├── model/
│   ├── Lotto.js                 # 로또 객체
│   ├── LottoGame.js             # 게임 로직
│   ├── LottoMaker.js            # 로또 발행
│   ├── LottoResult.js           # 로또의 결과 도출
│   ├── Calculator.js            # 수익률 계산
│   └── Validator.js             # 검증 로직 통합
│
├── view/
│   ├── InputView.js           # 사용자 입력
│   └── OutputView.js          # 결과 출력
│
├── App.js                     # 프로그램 실행
├── index.js                   # 진입점
└── README.md                  # 프로젝트 설명
```

## 구현 체크리스트

### InputView

- [x] 구입 금액 입력
- [x] 당첨 번호 입력
- [x] 보너스 번호 입력

### OutputView

- [ ] 로또 발행 결과 출력
- [ ] 로또 결과 출력
- [ ] 수익률 출력

### Controller

- [x] 구입 금액 입력 후 검증
- [x] LottoGame 생성(금액 전달)
- [ ] Lotto 발행 결과 받아 출력
- [ ] 당첨 번호 입력 후 검증
- [ ] 보너스 번호 입력 후 검증
- [ ] LottoGame에 번호 전달하며 로직 실행
- [ ] 결과 가져와서 출력

### LottoGame

- [x] 기본 생성
  - [x] 금액 저장
  - [x] 결과 map 생성
- [ ] 로또 발행
  - [ ] 구입금액 입력 받아 저장
  - [ ] LottoMaker 통해 로또 발행
  - [ ] 발행 결과 저장 및 return
- [ ] 로또 게임 실행
  - [ ] 당첨 번호, 보너스 번호 입력 받아 LottoResult 생성
  - [ ] Lotto마다 LottoResult 내부 결과 도출 로직 실행
  - [ ] 결과 받아서 map에 저장 (this.result.set(x, this.result.get(x)++))
  - [ ] 수익률 계산하여 {결과map, 수익률} return

### LottoMaker

- [ ] 금액 입력 받아 개수 계산
- [ ] 랜덤 숫자 만들어서 Lotto 생성
- [ ] 생성된 Lotto 담은 배열 return

### LottoResult

- [ ] 당첨번호, 보너스 번호 저장
- [ ] 결과 도출 로직
  - [ ] Lotto내부에 당첨번호 몇개인가
  - [ ] 보너스 번호 있는가
  - [ ] 위의 내용 바탕으로 순위 숫자 return

### Calculator

- [ ] 결과 담은 map과 금액 받아옴
- [ ] map.entries() -> [key, value] 돌며 해당되는 금액과 개수 곱함
- [ ] total과 기존 금액으로 수익률 계산
- [ ] 수익률 return

### Validator

- [x] 구입 금액 검증
  - [x] 숫자인가
  - [x] 정수인가
  - [x] 1이상인가
  - [x] 1000으로 나누어 떨어지는가
- [x] 당첨 번호 검증
  - [x] 각각
    - [x] 숫자인가
    - [x] 정수인가
    - [x] 1이상 45이하인가
    - [x] unique한가
- [x] 보너스 번호 검증
  - [x] 숫자인가
  - [x] 정수인가
  - [x] 1이상 45 이하인가
  - [x] 당첨 번호에 없는가
- [x] 겹치는 로직
  - [x] 숫자 검증
    - [x] 숫자인가
    - [x] 정수인가
    - [x] 1이상인가
  - [x] 45이하인가
