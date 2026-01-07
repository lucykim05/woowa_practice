import { Console } from '@woowacourse/mission-utils';
import MatchingController from './controller/MatchingController.js';

class App {
  async run() {
    const controller = new MatchingController();
    controller.initMission();
    await controller.start();
  }
}

export default App;
