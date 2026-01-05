import Validator from './Validator.js';

const Parser = {
  parseOrder(order) {
    const arr = order.split(',').map((x) => x.split('-'));
    Validator.validateOrder(arr);
    const parsedOrder = [];
    arr.forEach((x) =>
      parsedOrder.push({
        name: x[0],
        quantity: Number(x[1]),
      })
    );
    return parsedOrder;
  },
};

export default Parser;
