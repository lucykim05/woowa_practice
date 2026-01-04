import { MissionUtils } from '@woowacourse/mission-utils';
import MachineController from './controller/MachineController.js';

class App {
  async play() {
    try {
      const controller = new MachineController();
      await controller.makeCoin();
      await controller.makeGoods();
      await controller.readUserAmount();
      await controller.makePurchase();
      await controller.printResult();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
