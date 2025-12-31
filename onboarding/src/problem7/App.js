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
    } catch (error) {
      console.error(error);
    }
  }

  recommand(username, friendArr, visitorArr) {
    const friend = Controller.getNewFriend(username, friendArr);
    const scoreResult = Calculator.calculate(friend, visitorArr, username);
  }
}

export default App;
