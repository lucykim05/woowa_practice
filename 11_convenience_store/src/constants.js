export const DEFAULT_MSG = {
  START: "안녕하세요. W편의점입니다.\n현재 보유하고 있는 상품입니다.\n",
};

export const URL = {
  PRODUCT: "../../public/products.md",
  PROMO: "../../public/promotion.md",
};

export const PRODUCT = {};
export const RAW_PRODUCT = Object.freeze({
  NAME: "",
  PRICE: "",
  COUNT: 0,
  PROMO: {
    STATUS: false,
    NAME: "",
    COUNT: 0,
  },
});

export const PROMO = {};
export const RAW_PROMO = Object.freeze({
  NAME: "",
  BUY: 0,
  GET: 0,
  START: null,
  END: null,
});

export const ERROR = {
  FILE: "[ERROR] 파일 이름을 읽을 수 없습니다.",
};
