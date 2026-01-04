import { ERROR } from '../constants/error.js';

class PurchaseManager {
  constructor(name, quantity, store) {
    this.name = name;
    this.quantity = quantity;
    this.store = store;
  }

  checkProcess(input) {
    if (!input) {
      return this.process();
    }
    if (input.command === 'check-free' && input.bool) {
      return this.purchaseFree(input);
    }
    if (input.command === 'check-free' && !input.bool) {
      return this.purchaseNotFree(input);
    }
    if (input.command === 'check-promo' && input.bool) {
      return this.purchaseNotPromo();
    }
    if (input.command === 'check-promo' && !input.bool) {
      return this.noPurchase();
    }
  }

  noPurchase() {
    return {
      command: false,
      name: this.name,
      quantity: null,
      free: null,
    };
  }

  process() {
    const info = this.getInfo();

    this.checkRemaining(info.promoQuantity, info.nonpromoQuantity);

    const bool = this.quantity <= info.promoQuantity;

    if (bool) {
      const result = this.processLess(info);
      return result;
    }
    return this.processMore(info);
  }

  processLess(info) {
    if (!info.promoInfo) {
      return this.purchase();
    }
    const get = Number(info.promoInfo.get);
    const buy = Number(info.promoInfo.buy);
    const set = get + buy;

    const bool = this.quantity % set === buy;

    if (bool) {
      return {
        command: 'check-free',
        name: this.name,
        quantity: this.quantity,
        free: null,
      };
    }
    return this.#purchasePromo(get, buy);
  }

  processMore(info) {
    if (info.promoQuantity === 0) {
      return this.purchase();
    }
    return this.purchaseCheckPromo(info);
  }

  purchaseCheckPromo(info) {
    const promoInfo = info.promoInfo;
    const get = promoInfo.get;
    const buy = promoInfo.buy;
    const free = Math.floor(info.promoQuantity / (get + buy));
    return {
      command: 'check-promo',
      name: this.name,
      quantity: this.quantity - free,
      free: free,
    };
  }

  purchase() {
    return {
      command: false,
      name: this.name,
      quantity: this.quantity,
      free: null,
    };
  }

  purchaseNotPromo(input) {
    input.command = false;
    input.quantity = this.quantity;
    return input;
  }

  #purchasePromo(get, buy) {
    const free = Math.floor(this.quantity / (get + buy));
    return {
      command: false,
      name: this.name,
      quantity: this.quantity,
      free: free,
    };
  }

  purchaseFree(input) {
    const promoInfo = this.store.getPromoInfo(input.name);
    const get = Number(promoInfo.get);
    const buy = Number(promoInfo.buy);
    const free = Math.floor((this.quantity + 1) / (get + buy));
    return {
      command: false,
      name: this.name,
      quantity: this.quantity + 1,
      free: free,
    };
  }

  purchaseNotFree(input) {
    const promoInfo = this.store.getPromoInfo(input.name);
    const get = promoInfo.get;
    const buy = promoInfo.buy;
    const free = Math.floor(this.quantity / (get + buy));
    return {
      command: false,
      name: this.name,
      quantity: this.quantity,
      free: free,
    };
  }

  getInfo() {
    const promoInfo = this.store.getPromoInfo(this.name);
    const productInfo = this.store.getProductInfo(this.name);
    const promoFiltered = productInfo
      .filter((x) => x.promotion !== null)
      .filter((x) => this.store.checkPromotion(x.promotion));
    if (promoFiltered.length > 0) {
      const promoQuantity = Number(promoFiltered[0].quantity);
      const nonpromoFiltered = productInfo.filter((x) => x.promotion == null);
      const nonpromoQuantity = Number(nonpromoFiltered[0].quantity);
      return {
        promoInfo: promoInfo,
        productInfo: productInfo,
        promoQuantity: promoQuantity,
        nonpromoQuantity: nonpromoQuantity,
      };
    }
    const nonpromoFiltered = productInfo.filter((x) => x.promotion == null);
    const nonpromoQuantity = Number(nonpromoFiltered[0].quantity);
    return {
      promoInfo: null,
      productInfo: productInfo,
      promoQuantity: 0,
      nonpromoQuantity: nonpromoQuantity,
      quantity: nonpromoQuantity,
    };
  }

  checkRemaining(promo, nonpromo) {
    if (this.quantity > promo + nonpromo) {
      throw new Error(ERROR.REAMINING);
    }
  }
}

export default PurchaseManager;
