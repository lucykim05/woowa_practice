import { CalculatorController } from "./Controller/CalcultorController.js";

class App {
  async run() {
    await CalculatorController.process();
  }
}

export default App;
