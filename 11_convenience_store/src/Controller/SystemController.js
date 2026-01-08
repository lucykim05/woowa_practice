import { PRODUCT, RAW_PRODUCT, URL } from "../constants.js";
import { readFile } from "../Utils/readFile.js";
import { OutputView } from "../View/OutputView.js";

export const SystemController = {
  async start() {
    OutputView.start();
    const products = this.saveProductFile();
  },

  saveProductFile() {
    const productArr = readFile(URL.PRODUCT);
    saveProductAsObject(productArr);
  },

  savePromoFile() {},
};

const saveProductAsObject = (arr) => {
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
