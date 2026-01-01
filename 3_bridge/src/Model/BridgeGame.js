import { BridgeMaker } from "./BridgeMaker.js";
import BridgeRandomNumberGenerator from "../../BridgeRandomNumberGenerator.js";
import { MOVEMENT } from "../constants.js";

export class BridgeGame {
  #bridgeU;
  #bridgeD;
  #bridgeSize;

  #playerMoveU;
  #playerMoveD;
  #round;
  #trial;

  constructor(bridgeSize) {
    this.#bridgeSize = bridgeSize;
    this.#bridgeU = [];
    this.#bridgeD = [];

    this.#playerMoveU = [];
    this.#playerMoveD = [];
    this.#round = 0;
    this.#trial = 0;

    this.#initializeBridge();
  }

  #initializeBridge() {
    [this.#bridgeU, this.#bridgeD] = BridgeMaker.makeBridge(
      this.#bridgeSize,
      BridgeRandomNumberGenerator
    );
  }

  #moveUP() {
    this.#round++;
    this.#playerMoveU.push("O");
    this.#playerMoveD.push("");
  }

  #moveDOWN() {
    this.#round++;
    this.#playerMoveU.push("");
    this.#playerMoveD.push("O");
  }

  #checkMove(bridge, move) {
    if (bridge[this.#round] === 1) {
      if (move === MOVEMENT.UP) this.#moveUP();
      if (move === MOVEMENT.DOWN) this.#moveDOWN();
      return true;
    }
    return false;
  }

  move(move) {
    if (move === MOVEMENT.UP) return this.#checkMove(this.#bridgeU, move);
    if (move === MOVEMENT.DOWN) return this.#checkMove(this.#bridgeD, move);
  }

  retry() {}
}
