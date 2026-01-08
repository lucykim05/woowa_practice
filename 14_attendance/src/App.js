import { Console } from '@woowacourse/mission-utils';
import Controller from './controller/Controller.js';

class App {
  async run() {
    try {
      const controller = new Controller();
      controller.initialize();
      await controller.start();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
