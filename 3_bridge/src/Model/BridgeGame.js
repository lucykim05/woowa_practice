import { BridgeMaker } from "./BridgeMaker.js";
import BridgeRandomNumberGenerator from "../../BridgeRandomNumberGenerator.js";
import { MOVEMENT } from "../constants.js";
import { PROCESS_MSG } from "../constants.js";

export class BridgeGame {
  #bridgeU;
  #bridgeD;
  #bridgeSize;

  #playerMoveU;
  #playerMoveD;
  #round;
  #trial;

  #isFinish;

  constructor(bridgeSize) {
    this.#bridgeSize = bridgeSize;
    this.#bridgeU = [];
    this.#bridgeD = [];

    this.#playerMoveU = [];
    this.#playerMoveD = [];
    this.#round = 0;
    this.#trial = 1;

    this.#isFinish = false;

    this.#initializeBridge();
  }

  #initializeBridge() {
    [this.#bridgeU, this.#bridgeD] = BridgeMaker.makeBridge(
      this.#bridgeSize,
      BridgeRandomNumberGenerator
    );
  }

  #move(moveUp, moveDown) {
    this.#round++;
    this.#playerMoveU.push(moveUp);
    this.#playerMoveD.push(moveDown);
  }

  #checkMove(bridge, move) {
    if (bridge[this.#round] === 1) {
      if (move === MOVEMENT.UP) this.#move(" ", "O");
      if (move === MOVEMENT.DOWN) this.#move("O", " ");
      return true;
    }

    if (move === MOVEMENT.UP) this.#move(" ", "X");
    if (move === MOVEMENT.DOWN) this.#move("X", " ");
    this.#trial++;
    return false;
  }

  move(move) {
    if (move === MOVEMENT.UP) return this.#checkMove(this.#bridgeU, move);
    if (move === MOVEMENT.DOWN) return this.#checkMove(this.#bridgeD, move);
  }

  getProcessMsg() {
    let bridge1Msg = PROCESS_MSG.START + this.#playerMoveU[0];
    let bridge2Msg = PROCESS_MSG.START + this.#playerMoveD[0];

    for (let i = 1; i < this.#round - 1; i++) {
      bridge1Msg += PROCESS_MSG.DELIMITER + this.#playerMoveU[i];
      bridge2Msg += PROCESS_MSG.DELIMITER + this.#playerMoveD[i];
    }
    bridge1Msg += PROCESS_MSG.END;
    bridge2Msg += PROCESS_MSG.END;

    return [this.#playerMoveU, this.#playerMoveD];
  }

  isSuccess() {
    if (this.#round === this.#bridgeSize) {
      this.#isFinish = true;
      return true;
    }
    return false;
  }

  getResult() {
    const process = this.getProcessMsg();
    if (this.#isFinish) return [process, "성공", this.#trial];
    return [process, "실패", this.#trial];
  }

  retry() {}
}
