class Calculator {
  static getKey(input) {
    const keys = input.sort((a, b) => b - a);
    return keys;
  }

  static setResult(input) {
    const result = Array(input.length).fill(0);
    return result;
  }

  static countAmount(unitInput, amount) {
    const keys = Calculator.getKey(unitInput);
    const result = Calculator.setResult(unitInput);
    let total = amount;
    for (let i = 0; i < keys.length; i++) {
      result[i] = Math.floor(total / keys[i]);
      total = total % keys[i];
    }
    return result;
  }
}

export default Calculator;
