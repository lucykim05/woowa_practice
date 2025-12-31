import GameController from './Controller/GameController.js';
import InputView from './View/InputView.js';
import Output from './View/OutputView.js';

class App {
  async play() {
    // try {
    Output.printGameStart();
    await this.repeatGame();
    // } catch (error) {
    //   console.error(error);
    // }
  }

  async repeatGame() {
    while (true) {
      const gameController = new GameController();
      await gameController.play();
      const answer = await InputView.readStart();
      if (answer === 2) break;
    }
  }
}

export default App;
