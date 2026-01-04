import { ERROR } from '../constants/error.js';

class Worker {
  #purchase;
  #store;
  #customer;

  constructor(purchase, store) {
    this.#purchase = purchase;
    this.#store = store;
  }

  process() {
    const request = this.#purchase;
    this.#purchase.forEach((x) => {
      const [name, quantity] = x;
      this.checkRemaining(name, Number(quantity));
    });
  }

  checkRemaining(name, quantity) {
    const info = this.#store.getProductInfo(name);
    let total = 0;
    info.forEach((x) => (total += Number(x.quantity)));
    if (total >= quantity) return info;
    throw new Error(ERROR.REAMINING);
  }
}

export default Worker;
