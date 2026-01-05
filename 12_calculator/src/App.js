import Controller from './controller/Controller.js';

class App {
  async run() {
    const controller = new Controller();
    await controller.readInput();
    const parsedResult = controller.parse();
  }
}

export default App;
