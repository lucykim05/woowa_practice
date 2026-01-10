import Validator from './Validator.js';

const Parser = {
  parseLetter(input) {
    const letters = [',', ':'];
    if (input.startsWith('//')) letters.push(this.checkCustom(input));
    return letters;
  },

  checkCustom(input) {
    const sliced = input.slice(2, 5);
    if (!sliced.endsWith('\\n')) throw new Error();

    const custom = sliced[0];
    Validator.validateCustom(custom);
    return custom;
  },
};

export default Parser;
