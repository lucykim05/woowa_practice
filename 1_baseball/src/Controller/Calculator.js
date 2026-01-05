class Calculator {
  static calculate(userNumber, answerNumber) {
    const userArr = String(userNumber).split('').map(Number);
    const answerArr = String(answerNumber).split('').map(Number);
    const strike = this.#checkStrike(userArr, answerArr);
    const ball = this.#checkBall(userArr, answerArr);
    const result = this.#makeResult(strike, ball);
    return result;
  }

  static #checkStrike(userArr, answerArr) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (userArr[i] === answerArr[i]) count++;
    }
    return count;
  }

  static #checkBall(userArr, answerArr) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (answerArr.includes(userArr[i]) && answerArr[i] !== userArr[i])
        count++;
    }
    return count;
  }

  static #makeResult(strike, ball) {
    if (strike === 0) {
      if (ball === 0) {
        return '낫싱';
      } else {
        return `${ball}볼`;
      }
    } else {
      if (ball === 0) {
        return `${strike}스트라이크`;
      } else {
        return `${ball}볼 ${strike}스트라이크`;
      }
    }
  }
}

export default Calculator;
