import BridgeMaker from './BridgeMaker.js';
import BridgeRandomNumberGenerator from './BridgeRandomNumberGenerator.js';
import InputView from './InputView.js';
import GameRound from './GameRound.js';
import GameResult from './GameResult.js';
import OutputView from './OutputView.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #tryCount;
  #gameRound;
  #bridge;
  #upArr;
  #downArr;

  constructor() {
    this.#tryCount = 0;
    this.#upArr = [];
    this.#downArr = [];
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
      this.#setArr(isAnswer, input);
      console.log(position);
      if (!isAnswer || position == length) break;
    }
    const position = this.#gameRound.getPosition();
    if (position == length) {
      this.#getResult(position, this.#bridge);
      return;
    }
    await this.#checkRetry(position, length);
  }

  #setArr(isAnswer, input) {
    if (!isAnswer && input === 'D') this.#updateDown('X');
    if (!isAnswer && input === 'U') this.#updateUp('X');
    if (isAnswer && input === 'D') this.#updateDown('O');
    if (isAnswer && input === 'U') this.#updateUp('O');
  }

  async retry() {
    await this.play();
  }

  async #checkRetry(position, length) {
    const retry = await InputView.readGameCommand();
    if (retry === 'R') await this.retry();
    if (retry === 'Q') this.#getResult(position, this.#bridge, length);
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

  #updateDown(input) {
    this.#downArr.push(input);
    this.#upArr.push(' ');
  }

  #updateUp(input) {
    this.#downArr.push(' ');
    this.#upArr.push(input);
  }

  #getResult() {
    OutputView.printMap(this.#upArr, this.#downArr);
  }
}

export default BridgeGame;
