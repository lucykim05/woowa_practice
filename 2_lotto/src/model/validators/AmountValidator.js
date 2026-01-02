import { ERROR } from '../../constants/ErrorMessage.js';
import NumberValidator from './NumberValidator.js';

class AmountValidator {
  constructor(number) {
    this.#validate(number);
  }

  #validate(input) {
    const numberValidator = new NumberValidator();
    numberValidator.validate(input);
    this.#checkMod(input);
  }

  #checkMod(input) {
    if (input % 1000 !== 0) throw new Error(ERROR.MOD);
  }
}

export default AmountValidator;
