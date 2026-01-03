import MachineController from './controller/MachineController.js';

class App {
  async play() {
    const controller = new MachineController();
    await controller.makeCoin();
    await controller.makeGoods();
    await controller.readUserAmount();
    await controller.makePurchase();
    await controller.printResult();
  }
}

export default App;
