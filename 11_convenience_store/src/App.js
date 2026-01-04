import Controller from './controller/Controller.js';

class App {
  async run() {
    const controller = new Controller();
    controller.readInfo();
    await controller.readPurchaseInfo();
    controller.debug();
  }
}

export default App;
