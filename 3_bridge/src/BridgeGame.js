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

  async move(gameRound, length) {
    const input = await InputView.readMoving();
    const gameRound = this.#gameRound;
    const userBridge = gameRound.round(input, length);
    const userPosition = gameRound.getPosition();
    this.#tryCount++;
    if (userPosition === length) this.#printResult(userBridge, userPosition);
    await this.#checkRetry(userBridge, userPosition);
  }

  async retry() {
    await this.play();
  }

  async #checkRetry(userBridge, userPosition) {
    const retry = await InputView.readGameCommand();
    if (retry === 'R') await this.retry();
    if (retry === 'Q') this.#printResult(userBridge, userPosition);
  }

  #makeBridge(length) {
    const bridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator);
    return bridge;
  }

  async #getLength() {
    const length = await InputView.readBridgeSize();
    return length;
  }

  #printResult(bridge, position) {}
}

export default BridgeGame;
