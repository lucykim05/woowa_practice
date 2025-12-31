import InputView from './View/InputView.js';

class App {
  async play() {
    try {
      const input = new InputView();
      const num = await input.readInput();
    } catch (error) {
      console.error(error);
    }
  }
}

export default App;
