import { PRIZE } from '../constants/Message.js';

class LottoResult {
  #numbers;
  #winningNumbers;
  #bonusNumber;
  #amount;

  constructor(numbers, winningNumbers, bonusNumber, amount) {
    this.#numbers = numbers;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#amount = amount;
    this.#organizeRank();
    this.#calculateProfit();
  }

  #organizeRank() {
    let map = this.#makeMap();
    for (const lotto of this.#numbers) {
      const rank = this.#calculateRank(
        lotto,
        this.#winningNumbers,
        this.#bonusNumber
      );
      map.set(rank, map.get(rank) + 1);
    }
    this.map = map;
  }

  #calculateProfit() {
    const resultMap = this.map;
    let income = 0;
    for (let i = 1; i <= 5; i++) {
      income += resultMap.get(i) * PRIZE[i];
    }
    this.profit = (income / this.#amount / 10).toFixed(1);
  }

  #makeMap() {
    const map = new Map();
    map.set(1, 0).set(2, 0).set(3, 0).set(4, 0).set(5, 0);
    this.map = map;
    return map;
  }

  #calculateRank(lotto, winningNumbers, bonusNumber) {
    const winning = lotto.filter((x) => winningNumbers.includes(x)).length;
    const hasBonus = lotto.includes(bonusNumber);
    const rank = this.#getRank(winning, hasBonus);
    return rank;
  }

  #getRank(winning, hasBonus) {
    if (winning === 6) return 1;
    if (winning === 5 && hasBonus) return 2;
    if (winning === 5) return 3;
    if (winning === 4) return 4;
    if (winning === 3) return 5;
  }

  getResult() {
    return this.map;
  }

  getProfit() {
    return this.profit;
  }
}

export default LottoResult;
