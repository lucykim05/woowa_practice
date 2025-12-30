import Input from './Input.js';

class App {
  async run() {
    const input = new Input();
    const username = await input.getUserName();
    console.log(username);
  }
}

export default App;
