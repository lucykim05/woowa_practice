import { bridgeController } from "./Controller/bridgeController.js";
import { OutputView } from "./View/OutputView.js";
class App {
  async play() {
    OutputView.printStartMsg();
    await bridgeController();
  }
}

export default App;
