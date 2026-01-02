import BridgeGame from './BridgeGame.js';

class App {
  async play() {
    const bridgeGame = new BridgeGame();
    await bridgeGame.startGame();
  }
}

export default App;
