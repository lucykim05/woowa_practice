import Calculator from './Calculator';

class LottoResult {
  constructor(winning, bonus) {
    this.winning = winning;
    this.bonus = bonus;
  }

  getResult(lotto) {
    const numbers = lotto.getNumbers();
    const filtered = this.winning.filter((x) => numbers.includes(x));
    const hasBonus = numbers.includes(bonus);
    const rank = Calculator.getRank(filtered.length, hasBonus);
    return rank;
  }
}

export default LottoResult;
