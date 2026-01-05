import Validator from './Validator.js';

const Parser = {
  parseOrder(order) {
    const arr = this.splitOrder(order);
    const parsedOrder = [];
    arr.forEach((x) =>
      parsedOrder.push({
        name: x[0],
        quantity: Number(x[1]),
      })
    );
    return parsedOrder;
  },

  splitOrder(order) {
    const arr = order.split(',').map((x) =>
      x
        .trim()
        .split('-')
        .map((x) => x.trim())
    );
    Validator.validateOrder(arr);
    return arr;
  },
};

export default Parser;
