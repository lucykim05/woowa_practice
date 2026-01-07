import { Random } from '@woowacourse/mission-utils';

class RandomHandler {
  constructor(data) {
    this.data = data;
    this.result = [];
  }

  makeMatch() {
    let total = 0;
    while (true) {
      const result = this.shuffle();
      total++;
      if (total >= 3 || result) break;
    }
    return this.result;
  }

  shuffle() {
    const crew = this.data.crew;
    const arr = Array.from({ length: crew.length }, (_, i) => 0 + i);
    let shuffled = Random.shuffle(arr);
    shuffled = shuffled.map((x) => crew[x]);
    const bool = this.validatePair(shuffled);
    if (bool) this.result = shuffled;
    return bool;
  }

  validatePair(shuffled) {
    let bool = true;
    for (let i = 0; i < shuffled.length - 1; i += 2) {
      const pair = shuffled[i].getPairInfo(this.data.level);
      if (pair.includes(shuffled[i + 1])) bool = false;
    }
    return bool;
  }
}

export default RandomHandler;
