import InputView from '../view/InputView.js';
import Store from '../model/Store.js';
import OutputView from '../view/OutputView.js';
import Worker from '../model/Worker.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Controller {
  #input;
  #output;
  #store;
  #worker;
  #purchase;

  constructor() {}

  readInfo() {
    this.#input = new InputView();
    this.#output = new OutputView();
    const productsData = this.#input.readGoodsInfo();
    const promotionData = this.#input.readPromoInfo();
    const uniqueNames = this.#input.getUniqueNames();
    const result = this.processData(productsData, uniqueNames);
    this.#store = new Store(result, promotionData);
  }

  async run() {
    while (true) {
      this.printStore();
      await this.readPurchaseInfo();
      await this.purchase();
      await this.processCustomer();
      const result = await this.#input.readMoreShopping();
      if (result === 'N') break;
    }
  }

  processData(productsData, names) {
    for (const name of names) {
      const promo = productsData
        .filter((x) => x.name === name)
        .filter((x) => x.promotion == null);
      if (promo.length === 0) {
        const filtered = productsData.filter((x) => x.name === name);
        const price = filtered[0].price;
        productsData.push({
          name: name,
          price: price,
          quantity: 0,
          promotion: null,
        });
      }
    }
    return productsData;
  }

  printStore() {
    this.#output.printStore(this.#store.getAllProduct());
  }

  async readPurchaseInfo() {
    const purchaseInfo = await this.#input.readGoods();
    const arr = purchaseInfo.split(',').map((x) => x.split('-'));
    const filtered = arr.map((x) =>
      x.map((y) => y.replace(/[^가-힣0-9]/g, ''))
    );
    this.#purchase = filtered;
    this.#worker = new Worker(filtered, this.#store);
  }

  async purchase() {
    for (const x of this.#purchase) {
      await this.processPurchase(x);
    }
  }

  async processPurchase(input) {
    const [name, quantity] = input;
    this.#worker.makeManager(name, Number(quantity));
    const result = this.#worker.process();
    if (!result.command) {
      return this.#worker.processResult(result);
    }
    if (result.command === 'check-free') {
      const a = await this.checkFree(result);
      return this.#worker.processResult(a);
    }
    if (result.command === 'check-promo') {
      const a = await this.checkPromo(result);
      return this.#worker.processResult(a);
    }
  }

  async processCustomer() {
    const member = await this.#input.readMembership();
    const bool = member === 'Y';
    this.printResult(bool);
  }

  printResult(bool) {
    const customer = this.#worker.getCustomer();
    const products = customer.getProducts();
    const freeProducts = customer.getFreeProducts();
    const totalAmount = customer.getAmount();
    const totalQuantity = customer.getQuantity();
    const freeAmount = customer.getFreeAmount();
    const notDiscounted = customer.getNotDiscounted();
    this.#output.printReceipt(
      products,
      freeProducts,
      totalAmount,
      totalQuantity,
      freeAmount,
      notDiscounted,
      bool
    );
  }

  async checkFree(result) {
    const name = result.name;
    const answer = await MissionUtils.Console.readLineAsync(
      `현재 ${name}은(는) 1개를 무료로 더 받을 수 있습니다.\n추가하시겠습니까? (Y/N)\n`
    );
    const bool = answer === 'Y';
    result.bool = bool;
    return this.#worker.reprocessPurchase(result);
  }

  async checkPromo(result) {
    const name = result.name;
    const quantity = this.quantity;
    const answer = await MissionUtils.Console.readLineAsync(
      `현재 ${name} ${quantity}개는 프로모션 할인이 적용되지 않습니다.\n그래도 구매하시겠습니까? (Y/N)\n`
    );
    const bool = answer === 'Y';
    const obj = (result.bool = bool);
    return this.#worker.reprocessPurchase(obj);
  }
}

export default Controller;
