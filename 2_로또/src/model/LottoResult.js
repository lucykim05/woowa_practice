class LottoResult {
  constructor(winning, bonus) {
    this.winning = winning;
    this.bonus = bonus;
  }

  getResult(lotto) {
    const numbers = lotto.getNumbers();
    const filtered = this.winning.filter((x) => numbers.includes(x));
    const hasBonus = numbers.includes(bonus);
    const rank = this.getRank(filtered.length, hasBonus);
    return rank;
  }

  getRank(number, hasBonus) {
    if (number === 6) return 1;
    if (number === 5 && hasBonus) return 2;
    if (number === 5) return 3;
    if (number === 4) return 4;
    if (number === 3) return 5;
  }
}

export default LottoResult;
