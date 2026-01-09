export const DEFAULT = {
  PRICE: "구입금액을 입력해 주세요.\n",
  RANDOM: "개를 구매했습니다.",
};
export const LOTTO = Object.freeze({
  COUNT: 6,
  PRICE: 1000,
  RANGE: {
    MIN: 1,
    MAX: 45,
  },
});
export const ERROR = {
  EMPTY: "[ERROR] 값이 비었습니다.",
  LOTTO_OUT_OF_RANGE: "[ERROR] 로또 번호는 6개여야 합니다.",
  NAN: "[ERROR] 입력 값이 숫자가 아닙니다.",
  LOTTO_SAME_NUM: "[ERROR] 중복된 숫자가 들어있습니다. ",
};
