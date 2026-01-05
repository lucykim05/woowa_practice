import { Menu } from '../Menu.js';

class WeekendPromo {
  canApply(date, order) {
    const today = new Date(`2023-12-${String(date).padStart(2, 0)}`);
    const day = today.getDay();
    return day > 4;
  }

  apply(date, order, customer) {
    let total = 0;
    order.forEach((x) => {
      const filtered = Menu.filter((y) => y.name === x.name);
      const type = filtered[0].type;
      if (type === '메인') total += x.quantity * 2023;
    });
    customer.setFreeAmount('주말 할인', total);
  }
}

export default WeekendPromo;
