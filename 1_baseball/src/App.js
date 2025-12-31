import GameController from './Controller/GameController.js';
import InputView from './View/InputView.js';

class App {
  async play() {
    try {
      Output.printGameStart();
      const gameController = new GameController();
      await gameController.play();
    } catch (error) {
      console.error(error);
    }
  }
}

export default App;
