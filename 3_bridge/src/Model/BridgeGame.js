import { BridgeMaker } from "./BridgeMaker.js";
import BridgeRandomNumberGenerator from "../../BridgeRandomNumberGenerator.js";
export class BridgeGame {
  #bridgeU;
  #bridgeD;
  #bridgeSize;
  constructor(bridgeSize) {
    this.#bridgeSize = bridgeSize;
    this.#bridgeU = [];
    this.#bridgeD = [];

    this.#initializeBridge();
  }

  #initializeBridge() {
    [this.#bridgeU, this.#bridgeD] = BridgeMaker.makeBridge(
      this.#bridgeSize,
      BridgeRandomNumberGenerator
    );
  }

  move() {}

  retry() {}
}
