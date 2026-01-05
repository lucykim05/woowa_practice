import { Console } from '@woowacourse/mission-utils';
import PromoController from './controller/PromoController.js';

class App {
  async run() {
    try {
      const controller = new PromoController();
      await controller.readInput();
      controller.printResult();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
