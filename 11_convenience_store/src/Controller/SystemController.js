import { URL } from "../constants.js";
import { readFile } from "../Utils/readFile.js";
import { OutputView } from "../View/OutputView.js";

export const SystemController = {
  async start() {
    OutputView.start();
    const products = this.getProductFile();
  },

  getProductFile() {
    const productArr = readFile(URL.PRODUCT);
  },

  getPromoFile() {},
};
