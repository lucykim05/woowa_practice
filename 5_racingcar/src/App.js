import InputView from './View/InputView.js';
import GameController from './Controller/GameController.js';
import NewGameController from './Controller/NewGameController.js';

class App {
  async play() {
    const gameController = await this.#selectGame();
    gameController.run();
  }

  async #selectGame() {
    const gameType = await InputView.readType();
    if (gameType === 1) {
      return new GameController();
    }
    return new NewGameController();
  }
}

export default App;
