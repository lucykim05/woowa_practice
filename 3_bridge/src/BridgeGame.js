import BridgeMaker from './BridgeMaker.js';
import BridgeRandomNumberGenerator from './BridgeRandomNumberGenerator.js';
import InputView from './InputView.js';
import GameRound from './GameRound.js';
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
  #isAnswer;

  constructor() {
    this.#tryCount = 0;
    this.#upArr = [];
    this.#downArr = [];
  }

  async play() {
    this.#tryCount++;
    this.#upArr = [];
    this.#downArr = [];
    const length = await this.#getLength();
    await this.startGame(length);
    await this.move(length);
  }

  async startGame(length) {
    const bridge = this.#makeBridge(length);
    console.log(bridge);
    const gameRound = new GameRound(bridge, length);
    this.#gameRound = gameRound;
    this.#isAnswer = true;
  }

  async move(length) {
    await this.#round(length);
    const position = this.#gameRound.getPosition();
    if (position == length) {
      this.#getGameResult(position, this.#bridge);
      return;
    }
    await this.#checkRetry(position, length);
  }

  async #round(length) {
    while (true) {
      const input = await InputView.readMoving();
      const isAnswer = this.#gameRound.move(input);
      const position = this.#gameRound.getPosition();
      this.#setArr(isAnswer, input);
      this.#getResult(position, this.#bridge);
      if (!isAnswer || position == length) break;
    }
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

  #getGameResult() {
    OutputView.printResult(
      this.#upArr,
      this.#downArr,
      this.#isAnswer,
      this.#tryCount
    );
  }
}

export default BridgeGame;
