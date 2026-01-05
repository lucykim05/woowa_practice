class Customer {
  constructor(store) {
    this.purchasedProduct = [];
    this.freeProduct = [];
    this.store = store;
    this.amount = 0;
    this.freeAmount = 0;
    this.total = 0;
    this.notDiscounted = 0;
  }

  purchaseProduct(name, quantity) {
    const productInfo = this.store.getProductInfo(name);
    const price = Number(productInfo[0].price);
    const totalPrice = price * Number(quantity);
    this.purchasedProduct.push([name, quantity, totalPrice.toLocaleString()]);
    this.total += Number(quantity);
    this.amount += totalPrice;
    return totalPrice;
  }

  purchaseFreeProduct(name, quantity, totalPrice) {
    const productInfo = this.store.getProductInfo(name);
    const price = Number(productInfo[0].price);
    const freePrice = price * quantity;
    if (quantity > 0) {
      this.freeProduct.push([name, quantity]);
    }
    this.freeAmount += freePrice;
    this.freeQuantity += quantity;
    if (freePrice === 0) {
      this.notDiscounted += totalPrice;
    }
  }

  checkMember(bool) {
    this.membership = bool;
  }

  getProducts() {
    return this.purchasedProduct;
  }

  getFreeProducts() {
    return this.freeProduct;
  }

  getAmount() {
    return this.amount;
  }

  getQuantity() {
    return this.total;
  }

  getFreeAmount() {
    return this.freeAmount;
  }

  getNotDiscounted() {
    return this.notDiscounted;
  }
}

export default Customer;
