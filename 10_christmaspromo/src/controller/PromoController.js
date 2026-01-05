import InputView from '../InputView.js';
import Order from '../model/Order.js';
import Validator from '../model/Validator.js';

class PromoController {
  #order;

  consturctor() {}

  async readInput() {
    const date = await InputView.readDate();
    const order = await InputView.readOrder();
    const parsedOrder = Validator.validate(order);
    this.#order = new Order(date, parsedOrder);
  }
}

export default PromoController;
