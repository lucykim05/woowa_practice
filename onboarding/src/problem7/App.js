import Input from './Input.js';

class App {
  async run() {
    try {
      const input = new Input();
      const username = await input.getUserName();
      const friendArr = await input.getFriend();
      console.log(friendArr);
    } catch (error) {
      console.error(error);
    }
  }
}

export default App;
