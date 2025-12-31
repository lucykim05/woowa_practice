import Input from './Input.js';
import Controller from './Controller.js';
import Calculator from './Calculator.js';

class App {
  async run() {
    try {
      const input = new Input();
      const name = await input.readUserName();
      const friendArr = await input.readFriend();
      const visitorArr = await input.readVisitor();
      const scoreResult = this.#getScore(name, friendArr, visitorArr);
      const sortedMap = this.#sort(scoreResult);
      const result = this.#recommand(sortedMap);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

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
