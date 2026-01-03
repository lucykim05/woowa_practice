import { MOVE } from "./constants.js";
export const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let i = 0; i < Number(size); i++) {
      const randNum = Number(generateRandomNumber());
      if (randNum === 1) bridge.push(MOVE.UP);
      if (randNum === 0) bridge.push(MOVE.DOWN);
    }
    return bridge;
  },
};
