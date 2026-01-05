import { Menu } from './Menu.js';

class Order {
  constructor(date, order, customer) {
    this.date = date;
    this.order = order;
    this.customer = customer;
  }

  process() {
    const total = this.totalAmount();
    if (total >= 10000) {
      this.processPromo();
    }
  }

  totalAmount() {
    let totalAmount = 0;
    for (const product of this.order) {
      const menuInfo = Menu.filter((x) => x.name === product.name);
      const quantity = product.quantity;
      const price = menuInfo[0].price;
      totalAmount += quantity * price;
    }
    this.customer.setAmount(totalAmount);
    return totalAmount;
  }

  processPromo() {
    //크리스마스디데이
    this.christmasDday();
    //평일할인
    //주말할인
    //특별할인
    //증정할인
  }

  christmasDday() {
    if (this.date <= 25) {
      const amount = (this.date - 1) * 100;
      this.customer.setFreeAmount('크리스마스 디데이 할인', amount);
    }
  }
}

export default Order;
