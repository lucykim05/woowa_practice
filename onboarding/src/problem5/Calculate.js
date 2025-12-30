class Calculator {
  setKey() {
    const keys = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    return keys;
  }

  setResult() {
    const result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    return result;
  }

  countAmount(amount) {
    const keys = this.setKey();
    const result = this.setResult();
    let total = amount;
    for (let i = 0; i < keys.length; i++) {
      result[i] = Math.floor(total / keys[i]);
      total = total % keys[i];
    }
    return result;
  }
}

export default Calculator;
