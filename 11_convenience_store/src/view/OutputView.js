import { MissionUtils } from '@woowacourse/mission-utils';

class OutputView {
  printReceipt(
    products,
    freeProducts,
    totalAmount,
    totalQuantity,
    freeAmount,
    notDiscounted,
    bool
  ) {
    this.printProducts(products);
    this.printFree(freeProducts);
    this.printTotal(
      totalQuantity,
      totalAmount,
      freeAmount,
      notDiscounted,
      bool
    );
  }

  printProducts(products) {
    MissionUtils.Console.print('===========W 편의점=============');
    MissionUtils.Console.print('상품명		수량	금액');
    const product = products.map((x) => x.join(' 	'));
    MissionUtils.Console.print(product.join('\n'));
  }

  printFree(freeProducts) {
    MissionUtils.Console.print('===========증	정=============');
    const freeArr = freeProducts.map((x) => x.join('		'));
    MissionUtils.Console.print(freeArr.join('\n'));
  }

  printTotal(totalQuantity, totalAmount, freeAmount, notDiscounted, bool) {
    MissionUtils.Console.print('==============================');
    MissionUtils.Console.print(
      `총구매액	${totalQuantity}   ${totalAmount.toLocaleString()}`
    );
    MissionUtils.Console.print(`행사할인	   -${freeAmount.toLocaleString()}`);
    let discount = 0;
    if (bool) {
      discount += notDiscounted * 0.3;
    }
    const total = totalAmount - freeAmount - discount;
    MissionUtils.Console.print(`멤버십할인		-${discount.toLocaleString()}`);
    MissionUtils.Console.print(`내실돈		 ${total.toLocaleString()}`);
  }

  printStore(products) {
    MissionUtils.Console.print(
      '\n안녕하세요. W편의점입니다.\n현재 보유하고 있는 상품입니다.\n'
    );
    for (const x of products) {
      const message = x.quantity === 0 ? '재고 없음' : `${x.quantity}개`;
      const promo = x.promotion ? x.promotion : '';
      MissionUtils.Console.print(
        `- ${x.name} ${x.price.toLocaleString()}원 ${message} ${promo}`
      );
    }
  }
}

export default OutputView;
