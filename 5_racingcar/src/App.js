import InputView from './View/InputView.js';
import GameController from './Controller/GameController.js';
import NewGameController from './Controller/NewGameController.js';

class App {
  async play() {
    const retry = await InputView.read_RETRY();
    const gameController = await this.#selectGame();
    gameController.play();
  }

  async #selectGame() {
    const gameType = await InputView.readType();
    if (gameType === 1) {
      const gameController = await this.#gameInput();
      return gameController;
    }
    const gameController = await this.#newGameInput();
    return gameController;
  }

  async #gameInput() {
    const names = await InputView.readNames();

    const count = await InputView.readCount();

    return new GameController(names, count);
  }

  async #newGameInput() {
    const user = await InputView.readUserName();
    const others = await InputView.readOtherNames();
    const count = await InputView.readCount();

    return new NewGameController(user, others, count);
  }
}

export default App;
