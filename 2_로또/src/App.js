import { Console } from '@woowacourse/mission-utils';
import GameController from './controller/GameController.js';

class App {
  async run() {
    try {
      const controller = new GameController();
      await controller.initGame();
      controller.makeLotto();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
