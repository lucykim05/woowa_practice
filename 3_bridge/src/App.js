import { bridgeGameController } from "./Controller/bridgeGameController.js";
class App {
  async play() {
    await bridgeGameController();
  }
}

export default App;
