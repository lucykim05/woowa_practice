import InputView from '../InputView.js';
import Customer from '../model/Customer.js';
import Parser from '../model/Parser.js';
import Validator from '../model/Validator.js';
import Order from '../model/Order.js';
import OutputView from '../OutputView.js';

class PromoController {
  #customer;

  consturctor() {}

  async readInput() {
    const date = await InputView.readDate();
    Validator.validateDate(Number(date));
    const order = await InputView.readOrder();
    const parsedOrder = Parser.parseOrder(order);
    Validator.validateUnique(parsedOrder);
    Validator.validateMenu(parsedOrder);
    this.#customer = new Customer(Number(date), parsedOrder);
    new Order(Number(date), parsedOrder, this.#customer);
  }

  printResult() {
    const result = this.#customer.getResult();
    OutputView.printStart(result.date);
    OutputView.printMenu(result.order);
    OutputView.printTotal(result.total);
    OutputView.printFreeProduct(result.freeMenu);
    OutputView.printFreeList(result.freeList);
    OutputView.printFreeAmount(result.freeAmount);
    OutputView.printTotalPrice(
      result.total - result.freeAmount,
      result.freeList
    );
    const badge = this.getBadge(result.freeAmount);
    OutputView.printBadge(badge);
  }

  getBadge(amount) {
    if (amount >= 20000) return '산타';
    if (amount >= 10000) return '트리';
    if (amount >= 5000) return '별';
  }
}

export default PromoController;
