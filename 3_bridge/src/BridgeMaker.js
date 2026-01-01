export const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let count = 0;
    const bridge1 = [];
    const bridge2 = [];

    while (count < size) {
      const randNum1 = generateRandomNumber.generate();
      const randNum2 = 1 - randNum1;
      bridge1.push(randNum1);
      bridge2.push(randNum2);
      count++;
    }
    return [bridge1, bridge2];
  },
};
