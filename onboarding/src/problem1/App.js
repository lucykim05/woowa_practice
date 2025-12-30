import { MissionUtils } from '@woowacourse/mission-utils';
import Controller from './Controller.js';
import Output from './Output.js';

class App {
  run() {
    try {
      this.printStart();
      this.playGame();
    } catch (error) {
      console.error(error);
      this.printError();
    }
  }

  playGame() {
    for (let i = 0; i < 3; i++) {
      const pobiResult = this.playRound('pobi');
      const crongResult = this.playRound('crong');
      const result = this.getResult(pobiResult, crongResult);
      this.printResult(pobiResult, crongResult, result);
    }
  }

  playRound(name) {
    const game = new Controller(name);
    game.getRandomPage();
    const score = game.getScore();
    const page = game.getPage();
    return { name, page, score };
  }

  getWinner(a, b) {
    if (a.score > b.score) return a;
    if (b.score > a.score) return b;
    if (a.score == b.score) return 0;
  }

  getResult(a, b) {
    const result = this.getWinner(a, b);
    if (result === a) return 1;
    if (result === b) return 2;
    if (result === 0) return 0;
  }

  printResult(pobiScore, crongScore, result) {
    Output.printRoundResult(pobiScore, crongScore, result);
  }

  printStart() {
    Output.printName('pobi', 'crong');
  }

  printError() {
    MissionUtils.Console.print(-1);
  }
}

export default App;
