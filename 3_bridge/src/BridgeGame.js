import InputView from './InputView.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.tryCount = 0;
  }

  async startGame() {
    const length = await InputView.readBridgeSize();
    const bridge = this.#makeBridge(length);
  }

  move() {}

  retry() {}

  #makeBridge() {}
}

export default BridgeGame;
