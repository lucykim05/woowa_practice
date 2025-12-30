import { getPurchase, getWinningNum } from "../View/input.js";
import { printError, printLottery } from "../View/output.js";
import { validator } from "../Model/validator.js";
import { TYPE, LOTTO_PRICE } from "../constants.js";
import { LottoGame } from "../Model/LottoGame.js";
import { winningNumParser } from "../Model/parser.js";
export const lottoController = async () => {
  try {
    //로또 구입 개수
    const purchaseCount = await getPurchase();

    //로또 게임 초기화
    const lottoGame = new LottoGame(purchaseCount);
    printLottery(purchaseCount, lottoGame.getLottoNumbers());

    //당첨 금액 저장
    getWinning(lottoGame);
  } catch (error) {
    printError(error.message);
  }
};

const getPurchase = async () => {
  //구입 금액 입력 및 검증
  const purchaseInput = await getPurchase();
  validator(TYPE.PURCHASE, purchaseInput);
  return Number(purchaseInput) / LOTTO_PRICE;
};

const getWinning = async (lottoGame) => {
  //당첨 번호 입력, 검증, 저장
  const winningNumInput = await getWinningNum();
  const parsedWinningNum = winningNumParser(winningNumInput);
  validator(TYPE.WINNING, parsedWinningNum);

  saveWinning(lottoGame);
};

const saveWinning = (lottoGame) => {
  lottoGame.saveWinningNumbers(parsedWinningNum);
};
