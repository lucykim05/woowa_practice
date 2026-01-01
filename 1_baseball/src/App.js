import { baseballController } from "./Controller/baseballController.js";

class App {
  async run() {
    await baseballController();
  }
}

export default App;
