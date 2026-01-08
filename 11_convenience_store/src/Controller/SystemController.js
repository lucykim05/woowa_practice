import { PRODUCT, PROMO, URL } from "../constants.js";
import {
  saveProductAsObject,
  savePromoAsObject,
} from "../Model/saveAsObject.js";
import { readFile } from "../Utils/readFile.js";

export const SystemController = {
  async start() {
    OutputView.start();
    this.saveProductFile();
    this.savePromoFile();
  },

  saveProductFile() {
    const productArr = readFile(URL.PRODUCT);
    saveProductAsObject(productArr);
  },

  savePromoFile() {
    const promoArr = readFile(URL.PROMO);
    savePromoAsObject(promoArr);
  },
};
