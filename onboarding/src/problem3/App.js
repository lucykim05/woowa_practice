import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const arr = await this.getNumber();
      this.printStart();
      arr
        .map((x) => Number(x))
        .forEach((num) => {
          const result = this.solution(num);
          this.printResult(num, result);
        });
    } catch (error) {
      console.error(error);
    }
  }

  async getNumber() {
    const input = await MissionUtils.Console.readLineAsync(
      '숫자를 입력해주세요.\n'
    );
    return input.split(',').map((x) => x.trim());
  }

  solution(input) {
    let result = 0;
    for (let i = 1; i <= input; i++) {
      const number = String(i);
      for (const num of number) {
        if (num === '3' || num === '6' || num === '9') result += 1;
      }
    }
    return result;
  }

  printStart() {
    MissionUtils.Console.print('\n| number | result |\n| ------ | ------ |');
  }

  printResult(input, result) {
    MissionUtils.Console.print(`| ${input}     | ${result}     |`);
  }

  validate(input) {
    this.validateNumber(input);
    this.validateRange(input);
  }

  validateNumber(input) {
    if (Number.isNaN(input)) throw new Error('[ERROR] 숫자를 입력해주세요');
    if (!Number.isInteger(input))
      throw new Error('[ERROR] 자연수를 입력해주세요.');
  }

  validateRange(input) {
    if (input < 1 || input > 10000)
      throw new Error('[ERROR] 숫자는 1 이상 10,000 이하의 자연수입니다.');
  }
}

export default App;
