import BridgeMaker from './BridgeMaker.js';
import BridgeRandomNumberGenerator from './BridgeRandomNumberGenerator.js';
import InputView from './InputView.js';
import GameRound from './GameRound.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.tryCount = 0;
  }

  async play() {
    const gameRound = await this.startGame();
  }

  async startGame() {
    const length = await InputView.readBridgeSize();
    const bridge = this.#makeBridge(length);
    const gameRound = new GameRound(bridge);
    return gameRound;
  }

  move() {}

  retry() {}

  #makeBridge(length) {
    const bridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator);
    return bridge;
  }
}

export default BridgeGame;
