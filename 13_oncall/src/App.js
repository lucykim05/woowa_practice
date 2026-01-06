import { SystemController } from "./Controller/SystemController.js";

class App {
  async run() {
    await SystemController.start();
  }
}

export default App;
