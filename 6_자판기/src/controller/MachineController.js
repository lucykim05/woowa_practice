import InputView from '../view/InputView.js';
import CoinMaker from '../model/CoinMaker.js';
import OuputView from '../view/OutputView.js';
import Validator from '../model/Validator.js';
import GoodsMaker from '../model/GoodsMaker.js';
import { ERROR } from '../constants/error.js';
import Coin from '../Coin.js';

class MachineController {
  #input;
  #output;
  #coinMap;
  #validator;
  #quantityMap;
  #amountMap;
  #userAmount;
  #total;
  #min;

  constructor() {
    this.#input = new InputView();
    this.#output = new OuputView();
    this.#validator = new Validator();
  }

  async makeCoin() {
    const amount = Number(await this.#input.readAmount());
    this.#validator.validateAmount(amount);
    const coinMaker = new CoinMaker(amount);
    this.#coinMap = coinMaker.getCoinMap();
    this.#output.printCoin(this.#coinMap);
  }

  async makeGoods() {
    const goodsInput = await this.#input.readGoods();
    const goodsArr = goodsInput
      .replace(/[^a-zA-Z0-9가-힣,;]/g, '')
      .split(';')
      .map((x) => x.split(','));
    this.#validator.validateGoods(goodsArr);
    const goodsMaker = new GoodsMaker(goodsArr);
    this.#quantityMap = goodsMaker.getQuantityMap();
    this.#amountMap = goodsMaker.getAmountMap();
    this.#total = goodsMaker.getTotal();
    this.#min = goodsMaker.getMin();
  }

  async readUserAmount() {
    const userAmount = await this.#input.readUserAmount();
    this.#validator.validateAmount(userAmount);
    this.#userAmount = userAmount;
  }

  async makePurchase() {
    while (true) {
      await this.#processPurchase();
      if (this.#total === 0 || this.#userAmount < this.#min) break;
    }
  }

  async printResult() {
    this.#output.printUserAmount(this.#userAmount);
    const remainMap = new Map();
    this.#processRemain(Coin.COIN_500, remainMap);
    this.#processRemain(Coin.COIN_100, remainMap);
    this.#processRemain(Coin.COIN_50, remainMap);
    this.#processRemain(Coin.COIN_10, remainMap);
    this.#output.printRemain(remainMap);
  }

  async #processPurchase() {
    this.#output.printUserAmount(this.#userAmount);
    const userGoods = await this.#input.readUserGoods();
    const quantity = this.#quantityMap.get(userGoods);
    if (quantity >= 1) {
      this.#quantityMap.set(userGoods, this.#quantityMap.get(userGoods) - 1);
      this.#total--;
      this.#userAmount -= this.#amountMap.get(userGoods);
    }
  }

  #processRemain(coin, remainMap) {
    const remain = Math.floor(this.#userAmount / coin);
    const coinCount = this.#coinMap.get(coin);
    const min = Math.min(remain, coinCount);
    remainMap.set(coin, min);
    this.#userAmount -= min * coin;
  }
}

export default MachineController;
