import GameController from './controller/GameController.js';

class App {
  async play() {
    const gameController = new GameController();
    await gameController.run();
  }
}

export default App;
