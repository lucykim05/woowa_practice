class Calculator {
  static calculate(friend, visitorArr, username, controller) {
    const firstFriendArr = controller.getFirstArr();
    const scoreMap = this.#addFriendScore(friend, username);
    const result = this.#addVisitorScore(visitorArr, scoreMap, firstFriendArr);
    return result;
  }

  static #addFriendScore(friend, username) {
    const scoreMap = new Map();
    for (const f of friend) {
      if (f !== username) {
        if (scoreMap.has(f)) {
          scoreMap.set(f, scoreMap.get(f) + 10);
        } else {
          scoreMap.set(f, 10);
        }
      }
    }
    return scoreMap;
  }

  static #addVisitorScore(visitorArr, scoreMap, firstFriendArr) {
    for (const visitor of visitorArr) {
      if (!firstFriendArr.includes(visitor)) {
        if (scoreMap.has(visitor)) {
          scoreMap.set(visitor, scoreMap.get(visitor) + 1);
        } else {
          scoreMap.set(visitor, 1);
        }
      }
    }
    return scoreMap;
  }
}

export default Calculator;
