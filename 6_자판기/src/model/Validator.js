import { ERROR } from '../constants/error.js';

class Validator {
  validateAmount(input) {
    this.#validateNumber(input);
    this.#validateRemain(input);
  }

  validateGoods(arr) {
    arr.forEach((x) => {
      const [name, amount, quantity] = x;
      this.#validateName(name);
      this.validateAmount(Number(amount));
      this.#validateNumber(Number(quantity));
    });
  }

  #validateNumber(input) {
    if (Number.isNaN(input)) throw new Error(ERROR.NOT_A_NUMBER);
  }

  #validateRemain(input) {
    if (input % 10 !== 0) throw new Error(ERROR.REMAIN);
  }

  #validateName(input) {
    const bool = /^[가-힣]+$/.test(input);
    if (!bool) throw new Error(ERROR.NOT_KOREAN);
  }
}

export default Validator;
