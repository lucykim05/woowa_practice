import InputView from '../InputView.js';
import Customer from '../model/Customer.js';
import Parser from '../model/Parser.js';
import Validator from '../model/Validator.js';
import Order from '../model/Order.js';

class PromoController {
  #customer;

  consturctor() {}

  async readInput() {
    const date = await InputView.readDate();
    const order = await InputView.readOrder();
    const parsedOrder = Parser.parseOrder(order);
    Validator.validateUnique(parsedOrder);
    Validator.validateMenu(parsedOrder);
    this.#customer = new Customer(Number(date), parsedOrder);
    new Order(Number(date), parsedOrder, this.#customer);
  }
}

export default PromoController;
