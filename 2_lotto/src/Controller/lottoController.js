import {
  getPurchaseInput,
  getWinningNumInput,
  getBonusNumInput,
} from "../View/input.js";
import { printError, printLottery } from "../View/output.js";
import { validator } from "../Model/validators/validator.js";
import { TYPE, LOTTO_PRICE } from "../constants.js";
import { LottoGame } from "../Model/LottoGame.js";
import { winningNumParser } from "../Model/parser.js";
export const lottoController = async () => {
  try {
    //로또 구입
    const purchaseCount = await purchaseProcess();

    //로또 게임 초기화
    const lottoGame = new LottoGame(purchaseCount);
    printLottery(purchaseCount, lottoGame.getLottoNumbers());

    //당첨 금액
    await winningNumProcess(lottoGame);

    //보너스 번호
    await bonusNumProcess(lottoGame);

    //로또 당첨 계산
    lottoGame.calculateResult();
  } catch (error) {
    printError(error.message);
  }
};

const purchaseProcess = async () => {
  //구입 금액 입력 및 검증
  const purchaseInput = await getPurchaseInput();
  validator(TYPE.PURCHASE, purchaseInput);
  return Number(purchaseInput) / LOTTO_PRICE;
};

const winningNumProcess = async (lottoGame) => {
  //당첨 번호 입력, 검증, 저장
  const winningNumInput = await getWinningNumInput();
  const parsedWinningNum = winningNumParser(winningNumInput);
  validator(TYPE.WINNING, parsedWinningNum);

  saveWinning(lottoGame, parsedWinningNum);
  return parsedWinningNum;
};

const saveWinning = (lottoGame, parsedWinningNum) => {
  lottoGame.saveWinningNumbers(parsedWinningNum);
};

const bonusNumProcess = async (lottoGame) => {
  const bonusNumInput = await getBonusNumInput();
  validator(TYPE.BONUS, bonusNumInput, lottoGame);

  const bonusNum = Number(bonusNumInput);
  saveBonus(lottoGame, bonusNum);
  return bonusNum;
};

const saveBonus = (lottoGame, bonusNum) => {
  lottoGame.saveBonusNumber(bonusNum);
};
