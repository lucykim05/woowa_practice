import { ERROR } from '../constants/error.js';
import Customer from './Customer.js';
import PurchaseManager from './PurchaseManager.js';

class Worker {
  #store;
  #customer;
  #manager;

  constructor(store) {
    this.#store = store;
    this.#makeCustomer(store);
  }

  makeManager(name, quantity) {
    const manager = new PurchaseManager(name, Number(quantity), this.#store);
    this.#manager = manager;
  }

  process(input) {
    const result = this.#manager.checkProcess(input);
    return result;
  }

  checkRemaining(name, quantity) {
    const info = this.#store.getProductInfo(name);
    let total = 0;
    info.forEach((x) => (total += Number(x.quantity)));
    if (total >= quantity) return info;
    throw new Error(ERROR.REAMINING);
  }

  reprocessPurchase(result) {
    const name = result.name;
    const quantity = result.quantity;
    const manager = new PurchaseManager(name, Number(quantity), this.#store);
    return manager.checkProcess(result);
  }

  getCustomer() {
    return this.#customer;
  }

  #makeCustomer(store) {
    this.#customer = new Customer(store);
  }

  processResult(result) {
    const name = result.name;
    const quantity = result.quantity;
    const free = result.free;
    this.#store.buyProducts(name, quantity);
    const customer = this.#customer;
    const totalPrice = customer.purchaseProduct(name, quantity);
    customer.purchaseFreeProduct(name, free, totalPrice);
  }
}

export default Worker;
