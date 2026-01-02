import BridgeMaker from './BridgeMaker.js';
import BridgeRandomNumberGenerator from './BridgeRandomNumberGenerator.js';
import InputView from './InputView.js';
import GameRound from './GameRound.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #tryCount;
  #gameRound;

  constructor() {
    this.#tryCount = 0;
  }

  async play() {
    const length = await this.#getLength();
    await this.startGame(length);
    await this.move(length);
  }

  async startGame(length) {
    const bridge = this.#makeBridge(length);
    const gameRound = new GameRound(bridge);
    this.#gameRound = gameRound;
  }

  async move(length) {
    const input = await InputView.readMoving();
    const gameRound = this.#gameRound;
    gameRound.round(input, length);
  }

  async #getLength() {
    const length = await InputView.readBridgeSize();
    return length;
  }

  retry() {}

  #makeBridge(length) {
    const bridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator);
    return bridge;
  }
}

export default BridgeGame;
