import { SystemController } from "./Controller/SystemController";

class App {
  async run() {
    SystemController.initialize();
    //await SystemController;
  }
}

export default App;
