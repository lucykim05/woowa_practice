import { bridgeController } from "./Controller/bridgeController.js";
class App {
  async play() {
    await bridgeController();
  }
}

export default App;
