import { getPurchase } from "../View/input.js";
import { printError } from "../View/output.js";
import { validator } from "../Model/validator.js";
import { TYPE, LOTTO_PRICE } from "../constants.js";
import { LottoGame } from "../Model/LottoGame.js";
export const lottoController = async () => {
  try {
    //구입 금액 입력 및 검증
    const purchaseInput = await getPurchase();
    validator(TYPE.PURCHASE, purchaseInput);
    const purchaseCount = Number(purchaseInput) % LOTTO_PRICE;

    //로또 게임 초기화
    const lottoGame = new LottoGame(purchaseCount);
  } catch (error) {
    printError(error.message);
  }
};
