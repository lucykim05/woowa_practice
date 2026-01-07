import Controller from './controller/Controller.js';

class App {
  async run() {
    const controller = new Controller();
    controller.init();
    controller.makeOldReservation();
    await controller.start();
  }
}

export default App;
