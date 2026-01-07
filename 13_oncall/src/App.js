import Controller from './controller/Controller.js';

class App {
  async run() {
    const controller = new Controller();
    await controller.makeCalendar();
    await controller.makeOrganizer();
    controller.makeResult();
  }
}

export default App;
