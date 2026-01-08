import { Console } from "@woowacourse/mission-utils";
import { DEFAULT_MSG, PRODUCT } from "../constants.js";

export const OutputView = {
  start() {
    Console.print(DEFAULT_MSG.START);
  },

  product() {
    for (const key in PRODUCT) {
      const product = PRODUCT[key];
      if (product.PROMO.STATUS) {
        let msg = `- ${product.NAME} ${product.PRICE}원 ${product.PROMO.COUNT}개 ${product.PROMO.NAME}`;
        if (product.COUNT === 0)
          msg = `- ${product.NAME} ${product.PRICE}원 재고 없음 ${product.PROMO.NAME}`;
        Console.print(msg);
      }
      printNonPromo(product);
    }
  },
};

const printNonPromo = (product) => {
  let msg = `- ${product.NAME} ${product.PRICE}원 ${product.COUNT}개`;

  if (product.COUNT === 0)
    msg = `- ${product.NAME} ${product.PRICE}원 재고 없음`;

  Console.print(msg);
};
