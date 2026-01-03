class GoodsMaker {
  #goodsArr;
  #quantityMap;
  #amountMap;
  #total;
  #min;

  constructor(arr) {
    this.#goodsArr = arr;
    this.#makeGoods();
  }

  #makeGoods() {
    let total = 0;
    const min = [];
    this.#makeGoodsMap();
    this.#goodsArr.forEach((x) => {
      const [name, amount, quantity] = x;
      this.#quantityMap.set(name, Number(quantity));
      this.#amountMap.set(name, Number(amount));
      total += Number(quantity);
      min.push(Number(amount));
    });
    this.#total = total;
    this.#min = Math.min(...min);
  }

  #makeGoodsMap() {
    this.#quantityMap = new Map();
    this.#amountMap = new Map();
  }

  getQuantityMap() {
    return this.#quantityMap;
  }

  getAmountMap() {
    return this.#amountMap;
  }

  getTotal() {
    return this.#total;
  }

  getMin() {
    return this.#min;
  }
}

export default GoodsMaker;
