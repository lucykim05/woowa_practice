import InputView from '../view/InputView.js';
import Store from '../model/Store.js';
import Validator from '../model/Validator.js';
import Worker from '../model/Worker.js';

class Controller {
  #input;
  #output;
  #validator;
  #store;
  #worker;

  constructor() {}

  readInfo() {
    this.#input = new InputView();
    const productsData = this.#input.readGoodsInfo();
    const promotionData = this.#input.readPromoInfo();
    this.#store = new Store(productsData, promotionData);
  }

  purchase() {}

  async readPurchaseInfo() {
    const purchaseInfo = await this.#input.readGoods();
    const arr = purchaseInfo.split(',').map((x) => x.split('-'));
    const filtered = arr.map((x) =>
      x.map((y) => y.replace(/[^가-힣0-9]/g, ''))
    );
    this.#worker = new Worker(filtered, this.#store);
  }

  debug(input) {
    this.#worker.checkRemaining('사이다', 16);
  }
}

export default Controller;
