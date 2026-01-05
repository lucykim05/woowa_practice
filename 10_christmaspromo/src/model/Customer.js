class Customer {
  #date;
  #order;
  #totalAmount;
  #freeMenu;
  #freeList;
  #freeAmount;

  constructor(date, order) {
    this.#date = date;
    this.#order = order;
    this.#totalAmount = 0;
    this.#freeMenu = [];
    this.#freeList = [];
    this.#freeAmount = 0;
  }

  setAmount(amount) {
    this.#totalAmount += amount;
  }

  setFreeAmount(promoName, amount) {
    this.#freeList.push({
      name: promoName,
      price: amount,
    });
    this.#freeAmount += amount;
  }

  setFreeProduct() {
    this.#freeMenu.push({
      name: '샴페인',
      quantity: 1,
    });
    this.#freeAmount += 25000;
    this.#freeList.push({
      name: '증정 이벤트',
      price: 25000,
    });
  }
}

export default Customer;
