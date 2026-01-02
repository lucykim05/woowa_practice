import BridgeMaker from './BridgeMaker.js';
import BridgeRandomNumberGenerator from './BridgeRandomNumberGenerator.js';
import InputView from './InputView.js';
import GameRound from './GameRound.js';
import GameResult from './GameResult.js';

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
    const userBridge = gameRound.round(input, length);
    const userPosition = gameRound.getPosition();
    this.#tryCount++;
    if (userPosition === length)
      this.#getResult(userBridge, userPosition, length);
    await this.#checkRetry(userBridge, userPosition);
  }

  async retry() {
    await this.play();
  }

  async #checkRetry(userBridge, userPosition) {
    const retry = await InputView.readGameCommand();
    if (retry === 'R') await this.retry();
    if (retry === 'Q') this.#getResult(userBridge, userPosition);
  }

  #makeBridge(length) {
    const bridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator);
    return bridge;
  }

  async #getLength() {
    const length = await InputView.readBridgeSize();
    return length;
  }

  #getResult(userBridge, position, length) {
    const gameResult = new GameResult();
    gameResult.calculate(userBridge, position, length);
    const up = gameResult.getUpSide();
    const down = gameResult.getDownSide();
    console.log(up);
  }
}

export default BridgeGame;
