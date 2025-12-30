export const INPUT_MSG = {
  PURCHASE_PRICE: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
};

export const OUTPUT_MSG = {
  PURCHASE_PRICE: "개를 구매했습니다.",
};

export const TYPE = {
  PURCHASE: "p",
  WINNING: "w",
  BONUS: "b",
};

export const ERROR_MSG = {
  EMPTY_VALUE: `[ERROR] 입력 값이 비었습니다. 유효한 값을 입력해주세요. `,
  NOT_DIVISIBLE_NUMBER: `[ERROR] 구입 금액은 1000원 단위로 입력해주세요.`,
  INPUT_NAN: `[ERROR] 문자는 입력할 수 없습니다. 양수로 입력해주세요.`,
  NEGATIVE_NUMBER: `[ERROR] 음수는 입력할 수 없습니다. 양수로 입력해주세요.`,
  ZERO: `[ERROR] 0은 입력할 수 없습니다. 양수로 입력해주세요.`,
  UNVALID_COUNT: `[ERROR] 당첨 번호의 개수가 맞지 않습니다. 6개만 입력해주세요. `,
  OUT_OF_RANGE: `[ERROR] 숫자가 범위를 벗어났습니다. 중복되지 않는 1 ~ 45 사이의 숫자만을 입력해주세요.`,
  SAME_NUMBER: `[ERROR] 중복되는 숫자가 있습니다. 중복되지 않는 1 ~ 45 사이의 숫자만을 입력해주세요.`,
};

export const LOTTO_PRICE = 1000;
export const LOTTO_NUMBER_COUNT = 6;
export const DELIMITER = ",";
