import { getPurchase } from "../View/input.js";
import { printError } from "../View/output.js";
import { validator } from "../Model/validator.js";
import { TYPE } from "../constants.js";
export const lottoController = async () => {
  try {
    //구입 금액 입력 및 검증
    const purchaseInput = await getPurchase();
    const purchasePrice = validator(TYPE.PURCHASE, purchaseInput);
  } catch (error) {
    printError(error.messge);
  }
};
