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
}

export default Customer;
