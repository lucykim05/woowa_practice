import PromoController from './controller/PromoController.js';

class App {
  async run() {
    const controller = new PromoController();
    await controller.readInput();
    controller.printResult();
  }
}

export default App;
