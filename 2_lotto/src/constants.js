export const DEFAULT = {
  PRICE: "구입금액을 입력해 주세요.\n",
  RANDOM: "개를 구매했습니다.",
  WINNING: "\n당첨 번호를 입력해 주세요.\n",
  BONUS: "\n보너스 번호를 입력해 주세요.\n",
  RESULT: "\n당첨 통계\n---",
  PROFIT: { START: "총 수익률은 ", END: "%입니다." },
};

export const LOTTO = Object.freeze({
  COUNT: 6,
  PRICE: {
    MIN: 1000,
    MAX: 100000,
  },
  RANGE: {
    MIN: 1,
    MAX: 45,
  },
  MATCH: {
    THREE: {
      COUNT: 3,
      PRIZE: 5000,
      MSG: "3개 일치 (5,000원) - ",
    },
    FOUR: {
      COUNT: 4,
      PRIZE: 50000,
      MSG: "4개 일치 (50,000원) - ",
    },
    FIVE: {
      COUNT: 5,
      PRIZE: 1500000,
      MSG: "5개 일치 (1,500,000원) - ",
    },
    FIVE_BONUS: {
      COUNT: 5,
      PRIZE: 30000000,
      MSG: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    },
    SIX: {
      COUNT: 6,
      PRIZE: 2000000000,
      MSG: "6개 일치 (2,000,000,000원) - ",
    },
  },
});
export const ERROR = {
  EMPTY: "[ERROR] 값이 비었습니다.",
  LOTTO_OUT_OF_RANGE: "[ERROR] 로또 번호는 6개여야 합니다.",
  NAN: "[ERROR] 입력 값이 숫자가 아닙니다.",
  LOTTO_SAME_NUM: "[ERROR] 중복된 숫자가 들어있습니다. ",
  NOT_POSITIVE: "[ERROR] 양수가 아닙니다.",
  NOT_DIVISIBLE: "[ERROR] 1000원으로 나누어 떨어지지 않는 수입니다.",
  LOTTO_PRICE_EXCEED:
    "[ERROR] 로또는 1000원 이상 10만원 이하로 구매 가능합니다.",
  NUMBER_OUT_OF_RANGE: "[ERROR] 번호는 1~45 사이의 숫자여야 합니다.",
  BONUS_SAME_NUM: "[ERROR] 보너스 번호가 당첨번호와 중복됩니다.",
};
