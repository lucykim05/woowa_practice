import { MissionUtils } from '@woowacourse/mission-utils';

class Store {
  #products;

  constructor(products, promotion) {
    this.#products = products;
    this.#checkPromotion(promotion);
  }

  #checkPromotion(promotion) {
    const today = MissionUtils.DateTimes.now();
    const promo = [];
    promotion.forEach((x) => {
      if (new Date(x.start_date) <= today && new Date(x.end_date) >= today)
        promo.push(x.name);
    });
    this.#products.forEach((x) => {
      if (!promo.includes(x.promotion)) x.promotion = null;
    });
  }

  getProductInfo(name) {
    return this.#products.filter((x) => x.name === name);
  }
}

export default Store;
