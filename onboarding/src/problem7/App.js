import Input from './Input.js';
import Controller from './Controller.js';
import Calculator from './Calculator.js';
import Output from './Output.js';

class App {
  async run() {
    try {
      const scoreResult = await this.#calculate();
      const sortedMap = this.#sort(scoreResult);
      const result = this.#recommand(sortedMap);
      Output.printResult(result);
    } catch (error) {
      console.error(error);
    }
  }

  //input 받고 계산처리
  async #calculate() {
    try {
      const input = new Input();
      const name = await input.readUserName();
      const friendArr = await input.readFriend();
      const visitorArr = await input.readVisitor();
      const scoreResult = this.#getScore(name, friendArr, visitorArr);
      return scoreResult;
    } catch (error) {
      console.error(error);
    }
  }

  // 점수 정렬
  #sort(scoreResult) {
    const sortedMap = new Map(
      [...scoreResult.entries()].sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1];
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
      })
    );
    return sortedMap;
  }

  // 점수 계산
  #getScore(username, friendArr, visitorArr) {
    const controller = new Controller(username, friendArr, visitorArr);
    const friend = controller.getNewFriend(username, friendArr);
    const scoreResult = Calculator.calculate(
      friend,
      visitorArr,
      username,
      controller
    );
    return scoreResult;
  }

  //추천인 정리
  #recommand(sortedMap) {
    const result = [];
    [...sortedMap.entries()].map((x) => {
      if (x[1] > 0) {
        result.push(x[0]);
      }
    });

    if (result.length > 5) return result.slice(0, 5);
    return result;
  }
}

export default App;
