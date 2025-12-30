import { LOTTO_NUMBER_COUNT } from "./constants.js";
export class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  calculateMatch(winningNumbers, bonusNumber) {
    let match = 0;

    winningNumbers.forEach((number) => {
      if (this.#numbers.includes(number)) match++;
    });

    if (this.#numbers.includes(bonusNumber)) {
      if (match >= 5) return match - 3 + 1;
      match++;
    }
    return match - 3;
  }
}

export default Lotto;
