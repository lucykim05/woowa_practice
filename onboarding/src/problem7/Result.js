import Input from './Input.js';
import Controller from './Controller.js';
import Calculator from './Calculator.js';

class Result {
  static async getResult() {
    const scoreResult = await this.#calculate();
    const sortedMap = this.#sort(scoreResult);
    const result = this.#recommand(sortedMap);
    return result;
  }

  //input 받고 계산처리
  static async #calculate() {
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

  // 점수 계산
  static #getScore(username, friendArr, visitorArr) {
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

  // 점수 정렬
  static #sort(scoreResult) {
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

  //추천인 정리
  static #recommand(sortedMap) {
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

export default Result;
