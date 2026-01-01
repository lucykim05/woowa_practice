import { bridgeGameController } from "./Controller/bridgeGameController.js";
class App {
  async run() {
    await bridgeGameController();
  }
}

export default App;
