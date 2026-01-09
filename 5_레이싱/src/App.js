import { Console } from '@woowacourse/mission-utils';
import GameController from './controller/GameController.js';

class App {
  async play() {
    try {
      const controller = new GameController();
      await controller.run();
      controller.printResult();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
