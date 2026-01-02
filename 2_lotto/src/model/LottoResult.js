class LottoResult {
  #numbers;
  #winningNumbers;
  #bonusNumber;

  constructor(numbers, winningNumbers, bonusNumber) {
    this.#numbers = numbers;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.calculate(numbers, winningNumbers, bonusNumber);
  }

  calculate(numbers, winningNumbers, bonusNumber) {
    const arr = Array.from({ length: 5 }, () => 0);
    for (const lotto of numbers) {
      const idx = this.#calculateRank(lotto, winningNumbers, bonusNumber);
      if (!idx) continue;
      arr[idx]++;
    }
    console.log(arr);
  }

  #calculateRank(lotto, winningNumbers, bonusNumber) {
    const winning = this.#calculateWinning(lotto, winningNumbers);
    const hasBonus = lotto.includes(bonusNumber);
    return this.#getRank(winning, hasBonus);
  }

  #calculateWinning(lotto, winningNumbers) {
    const answer = lotto.filter((x) => winningNumbers.includes(x)).length;
    return answer;
  }

  #getRank(winning, hasBonus) {
    if (winning === 6) return 4;
    if (winning === 5 && hasBonus) return 3;
    if (winning === 5) return 2;
    if (winning === 4) return 1;
    if (winning === 3) return 0;
  }
}

export default LottoResult;
