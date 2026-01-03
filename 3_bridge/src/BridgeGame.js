import BridgeRandomNumberGenerator from "../BridgeRandomNumberGenerator.js";
import { BridgeMaker } from "./BridgeMaker.js";

export class BridgeGame {
  #bridgeSize;
  #bridge;
  constructor(bridgeSize) {
    this.#bridgeSize = bridgeSize;
    this.#bridge = [];

    this.#make();
  }

  #make() {
    this.#bridge = BridgeMaker.makeBridge(this.#bridgeSize, () => {
      BridgeRandomNumberGenerator.generate();
    });
  }

  move() {}

  retry() {}
}
