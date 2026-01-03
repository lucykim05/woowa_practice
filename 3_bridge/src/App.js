import BridgeGame from './BridgeGame.js';

class App {
  async play() {
    const bridgeGame = new BridgeGame();
    await bridgeGame.play();
  }
}

export default App;
