import Input from './Input.js';
import Controller from './Controller.js';

class App {
  async run() {
    try {
      const input = new Input();
      const name = await input.readUserName();
      const friendArr = await input.readFriend();
      console.log(friendArr);
      const friend = Controller.getNewFriend(name, friendArr);
      console.log(friend);
    } catch (error) {
      console.error(error);
    }
  }
}

export default App;
