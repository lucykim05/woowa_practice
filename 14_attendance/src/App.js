import { SystemController } from "./Controller/SystemController.js";

class App {
  async run() {
    SystemController.initialize();
    //await SystemController;
  }
}

export default App;
