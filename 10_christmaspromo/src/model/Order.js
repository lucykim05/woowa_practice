import { Menu } from './Menu.js';

class Order {
  constructor(date, order, customer) {
    this.date = date;
    this.order = order;
    this.customer = customer;
    this.process();
  }

  process() {
    this.totalAmount();
    if (this.total >= 10000) {
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
    this.total = totalAmount;
  }

  processPromo() {
    //크리스마스디데이
    this.christmasDday();
    //요일 할인
    this.dayPromo();
    //특별할인
    this.specialPromo();
    //증정할인
    this.freePromo();
  }

  freePromo() {
    if (this.total >= 120000) {
      this.customer.setFreeProduct();
    }
  }

  specialPromo() {
    const arr = [3, 10, 17, 24, 25, 31];
    if (arr.includes(this.date)) {
      this.customer.setFreeAmount('특별 할인', 1000);
    }
  }

  dayPromo() {
    const today = new Date(`2023-12-${String(this.date).padStart(2, 0)}`);
    const day = today.getDay();
    if (day <= 4) {
      this.workdayPromo();
    }
    if (day > 4) this.weekendPromo();
  }

  workdayPromo() {
    let total = 0;
    this.order.forEach((x) => {
      const filtered = Menu.filter((y) => y.name === x.name);
      const type = filtered[0].type;
      if (type === '디저트') total += x.quantity * 2023;
    });
    this.customer.setFreeAmount('평일 할인', total);
  }

  weekendPromo() {
    let total = 0;
    this.order.forEach((x) => {
      const filtered = Menu.filter((y) => y.name === x.name);
      const type = filtered[0].type;
      if (type === '메인') total += x.quantity * 2023;
    });
    this.customer.setFreeAmount('주말 할인', total);
  }

  christmasDday() {
    if (this.date <= 25) {
      const amount = 1000 + (this.date - 1) * 100;
      this.customer.setFreeAmount('크리스마스 디데이 할인', amount);
    }
  }
}

export default Order;
