import { Console } from '@woowacourse/mission-utils';
import Controller from './controller/Controller.js';

class App {
  async play() {
    try {
      const controller = new Controller();
      await controller.readInput();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
