import { SystemController } from "./Controller/SystemController.js";
export class App {
  async play() {
    await SystemController.start();
  }
}
