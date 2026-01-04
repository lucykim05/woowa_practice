import InputView from '../view/InputView.js';
import Store from '../model/Store.js';

class Controller {
  #input;
  #output;
  #store;

  constructor() {}

  readInfo() {
    this.#input = new InputView();
    const productsData = this.#input.readGoodsInfo();
    const promotionData = this.#input.readPromoInfo();
    this.#store = new Store(productsData, promotionData);
  }
}

export default Controller;
