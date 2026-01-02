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
  #bridge;

  constructor() {
    this.#tryCount = 0;
  }

  async play() {
    const length = await this.#getLength();
    await this.startGame(length);
    await this.move(length);
    this.#tryCount++;
  }

  async startGame(length) {
    const bridge = this.#makeBridge(length);
    console.log(bridge);
    const gameRound = new GameRound(bridge, length);
    this.#gameRound = gameRound;
  }

  async move(length) {
    while (true) {
      const input = await InputView.readMoving();
      const isAnswer = this.#gameRound.move(input);
      const position = this.#gameRound.getPosition();
      console.log(position);
      if (!isAnswer || position == length) break;
    }
    const position = this.#gameRound.getPosition();
    if (position !== length) {
      await this.#checkRetry(position);
      return;
    }
    this.#getResult(position, this.#bridge);
  }

  async retry() {
    await this.play();
  }

  async #checkRetry(position) {
    const retry = await InputView.readGameCommand();
    if (retry === 'R') await this.retry();
    if (retry === 'Q') this.#getResult(position, this.#bridge);
  }

  #makeBridge(length) {
    const bridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator);
    this.#bridge = bridge;
    return bridge;
  }

  async #getLength() {
    const length = await InputView.readBridgeSize();
    return length;
  }

  #getResult(position, bridge) {
    const gameResult = new GameResult();
    gameResult.calculate(position, bridge);
    const up = gameResult.getUpSide();
    const down = gameResult.getDownSide();
  }
}

export default BridgeGame;
