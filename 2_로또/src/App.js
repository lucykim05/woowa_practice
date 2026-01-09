import GameController from './controller/GameController.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    try {
      const controller = new GameController();
      await controller.initGame();
      controller.makeLotto();
      await controller.runGame();
      controller.printResult();
    } catch (error) {
      OutputView.printError(error.message);
    }
  }
}

export default App;
