const Calculator = {
  getRank(number, bool) {
    if (number === 6) return 1;
    if (number === 5 && hasBonus) return 2;
    if (number === 5) return 3;
    if (number === 4) return 4;
    if (number === 3) return 5;
  },
};

export default Calculator;
