import { PRODUCT, PROMO, RAW_PRODUCT, RAW_PROMO } from "../constants.js";

export const saveProductAsObject = (arr) => {
  arr.shift();
  for (const product of arr) {
    let copy = JSON.parse(JSON.stringify(RAW_PRODUCT));
    if (PRODUCT[product[0]]) copy = PRODUCT[product[0]];

    copy.NAME = product[0];
    copy.PRICE = Number(product[1]);
    if (product[3] !== "null") {
      copy.PROMO.STATUS = true;
      copy.PROMO.NAME = product[3];
      copy.PROMO.COUNT = Number(product[2]);
    } else {
      copy.COUNT = Number(product[2]);
    }
    PRODUCT[copy.NAME] = copy;
  }
};

export const savePromoAsObject = (arr) => {
  arr.shift();
  for (const promo of arr) {
    const copy = JSON.parse(JSON.stringify(RAW_PROMO));
    copy.NAME = promo[0];
    copy.BUY = Number(promo[1]);
    copy.GET = Number(promo[2]);
    copy.START = promo[3];
    copy.END = copy[4];
    PROMO[copy.NAME] = copy;
  }
};
