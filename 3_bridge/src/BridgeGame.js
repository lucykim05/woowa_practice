import BridgeRandomNumberGenerator from "../BridgeRandomNumberGenerator.js";
import { BridgeMaker } from "./BridgeMaker.js";
import { DEFAULT_MSG, MOVE, MSG } from "./constants.js";

export class BridgeGame {
  #bridgeSize;
  #bridge;
  #user;
  #round;
  #trial;
  #finish;
  constructor(bridgeSize) {
    this.#bridgeSize = bridgeSize;
    this.#bridge = [];
    this.#user = [];
    this.#round = 0;
    this.#trial = 1;
    this.#finish = false;

    this.#make();
  }

  #make() {
    this.#bridge = BridgeMaker.makeBridge(this.#bridgeSize, () => {
      return BridgeRandomNumberGenerator.generate();
    });
  }

  canMove(move) {
    const nextMove = this.#bridge[this.#round];
    if (nextMove === move) return true;
    return false;
  }

  move(move) {
    this.#user.push(move);
    this.#round++;
  }

  isFinish() {
    if (this.#round === this.#bridge.length) {
      this.#finish = true;
      return true;
    }
    return false;
  }

  makeProgressMsg() {
    let up = [];
    let down = [];
    for (let i = 0; i < this.#user.length; i++) {
      if (this.#user[i] === MOVE.UP) {
        up.push("O");
        down.push(" ");
      }
      if (this.#user[i] === MOVE.DOWN) {
        up.push(" ");
        down.push("O");
      }
    }
    const upMSG = `${MSG.START}${up.join(MSG.DELIMITER)}${MSG.END}`;
    const downMSG = `${MSG.START}${down.join(MSG.DELIMITER)}${MSG.END}`;

    return `${upMSG}\n${downMSG}`;
  }

  makeResultMsg() {
    let msg = [DEFAULT_MSG.RESULT];
    msg.push(this.makeProgressMsg());
    if (this.#finish) msg.push(`${DEFAULT_MSG.FINISH}성공`);
    if (!this.#finish) msg.push(`${DEFAULT_MSG.FINISH}실패`);
    msg.push(`${DEFAULT_MSG.TRIAL}${this.#trial}`);

    return msg.join("\n");
  }

  retry() {}
}
