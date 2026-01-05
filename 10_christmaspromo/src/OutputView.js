import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStart(date) {
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`
    );
  },

  printMenu(order) {
    Console.print('<주문 메뉴>');
    order.forEach((x) => Console.print(`${x.name} ${x.quantity}개`));
  },

  printTotal(price) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${price.toLocaleString()}원`);
  },

  printFreeProduct(input) {
    Console.print('\n<증정 메뉴>');
    if (input.length === 0) {
      Console.print('없음');
      return;
    }
    Console.print('샴페인 1개');
  },

  printFreeList(list) {
    Console.print('\n<혜택 내역>');
    if (list.length === 0) {
      Console.print('없음');
      return;
    }
    list.forEach((x) =>
      Console.print(`${x.name}: -${x.price.toLocaleString()}원`)
    );
  },

  printFreeAmount(amount) {
    Console.print('\n<총혜택 금액>');
    if (amount === 0) {
      Console.print('0원');
      return;
    }
    Console.print(`-${amount.toLocaleString()}원`);
  },

  printTotalPrice(amount, list) {
    Console.print(`\n<할인 후 예상 결제 금액>`);
    if (list.length === 0) {
      Console.print(`${amount.toLocaleString()}원`);
      return;
    }
    Console.print(`${(amount + 25000).toLocaleString()}원`);
  },

  printBadge(badge) {
    Console.print('\n<12월 이벤트 배지>');
    if (!badge) {
      Console.print('없음');
      return;
    }
    Console.print(`${badge}`);
  },
};

export default OutputView;
