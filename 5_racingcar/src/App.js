import InputView from './View/InputView.js';
import GameController from './Controller/GameController.js';
import NewGameController from './Controller/NewGameController.js';

class App {
  async play() {
    const gameController = await this.#selectGame();
    const result = gameController.play();

    console.log(result);
  }

  async #selectGame() {
    const gameType = await InputView.readType();
    if (gameType === 1) {
      const gameController = await this.#gameInput();
      return gameController;
    }
    // return new NewGameController();
  }

  async #gameInput() {
    const names = await InputView.readNames();

    const count = await InputView.readCount();

    return new GameController(names, count);
  }
}

export default App;
