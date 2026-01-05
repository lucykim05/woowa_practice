import { MissionUtils } from '@woowacourse/mission-utils';
import Controller from './controller/Controller.js';

class App {
  async run() {
    try {
      const controller = new Controller();
      await controller.readInput();
      const parsedResult = controller.parse();
      controller.validateParsed(parsedResult);
      controller.calculate(parsedResult);
    } catch (error) {
      console.error(error);
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
