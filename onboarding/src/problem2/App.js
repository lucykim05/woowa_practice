import { MissionUtils } from '@woowacourse/mission-utils';
import Output from './Output.js';
import Validator from './Validator.js';

class App {
  async run() {
    try {
      const arr = await this.getMessage();
      Output.printStart();
      arr.forEach((message) => {
        Validator.validate(message);
        const result = this.solveMessage(message);
        Output.printResult(message, result);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getMessage() {
    const input = await MissionUtils.Console.readLineAsync(
      '메세지를 입력해주세요.\n'
    );
    return input.split(',').map((x) => x.trim());
  }

  solveMessage(input) {
    while (true) {
      const result = this.deleteDu(input);
      if (input === result) return result;
      input = result;
    }
  }

  deleteDu(input) {
    const stack = [];
    for (let i = 0; i < input.length; i++) {
      let len = stack.length;
      if (stack[len - 1] === input[i]) {
        stack.pop();
      } else {
        stack.push(input[i]);
      }
    }
    return stack.join('');
  }
}

export default App;
