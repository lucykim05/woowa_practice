import { MissionUtils } from '@woowacourse/mission-utils';
import Controller from './controller/Controller.js';

class App {
  async run() {
    try {
      const controller = new Controller();
      controller.readInfo();
      await controller.run();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
