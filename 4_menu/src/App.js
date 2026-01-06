import { Console } from '@woowacourse/mission-utils';
import Controller from './controller/Controller.js';

class App {
  async play() {
    try {
      const controller = new Controller();
      const info = await controller.readInput();
      controller.makeCoach(info);
      controller.printResult();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
