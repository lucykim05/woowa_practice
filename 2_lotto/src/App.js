import { lottoController } from "./Controller/lottoController.js";
class App {
  async run() {
    await lottoController();
  }
}

export default App;
