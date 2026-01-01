import InputView from './View/InputView.js';
import GameController from './Controller/GameController.js';
import NewGameController from './Controller/NewGameController.js';

class App {
  async play() {
    const gameController = await this.#selectGame();
    gameController.play();
    const result = gameController.getCars();
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
    console.log(names);
    const count = await InputView.readCount();
    console.log(count);
    return new GameController(names, count);
  }
}

export default App;
