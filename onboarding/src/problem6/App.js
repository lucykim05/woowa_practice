import InputView from './Input.js';

class App {
  async run() {
    try {
      const input = new InputView();
      const info = await input.getInput();
      console.log(info);
    } catch (error) {
      console.error(error);
    }
  }
}

export default App;
