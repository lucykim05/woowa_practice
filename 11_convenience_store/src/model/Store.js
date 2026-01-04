import { MissionUtils } from '@woowacourse/mission-utils';

class Store {
  #products;
  #promotion;

  constructor(products, promotion) {
    this.#products = products;
    this.#promotion = promotion;
  }

  checkPromotion(name) {
    const today = MissionUtils.DateTimes.now();
    const promo = [];
    this.#promotion.forEach((x) => {
      if (new Date(x.start_date) <= today && new Date(x.end_date) >= today)
        promo.push(x.name);
    });
    return promo.includes(name);
  }

  getProductInfo(name) {
    return this.#products.filter((x) => x.name === name);
  }

  getPromoInfo(name) {
    const productInfo = this.getProductInfo(name);
    const filtered = productInfo.filter((x) => x.promotion !== null);
    if (filtered.length > 0) {
      const promoName = filtered[0].promotion;
      const result = this.#promotion.filter((x) => x.name === promoName);
      return result[0];
    }
    return null;
  }

  buyProducts(name, quantity) {
    const result = this.filterInfo(name);
    const [nonPromo, promo] = result;
    if (promo.length === 0) {
      nonPromo[0].quantity -= quantity;
      return;
    }
    if (promo[0].quantity >= quantity) {
      promo[0].quantity -= quantity;
      return;
    }
    promo[0].quantity = 0;
    nonPromo[0].quantity -= quantity - promo[0].quantity;
  }

  filterInfo(name) {
    const nonPromo = this.#products
      .filter((x) => x.name === name)
      .filter((y) => y.promotion == null || !this.checkPromotion(y.promotion));
    const promo = this.#products
      .filter((x) => x.name === name)
      .filter((y) => y.promotion !== null)
      .filter((x) => this.checkPromotion(x.promotion));
    return [nonPromo, promo];
  }

  getAllProduct() {
    return this.#products;
  }
}

export default Store;
