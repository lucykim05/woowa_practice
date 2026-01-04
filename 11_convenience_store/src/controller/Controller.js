import InputView from '../view/InputView.js';

class Controller {
  #input;
  #output;
  #store;

  constructor() {}

  readInfo() {
    this.#input = new InputView();
    const productsData = this.#input.readGoodsInfo();
    const promotionData = this.#input.readPromoInfo();
    this.#store = new this.#store(productsData, promotionData);
  }
}

export default Controller;
