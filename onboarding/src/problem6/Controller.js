import InputView from './Input.js';

class Controller {
  getCrewInfo() {
    const input = new InputView();
    const info = input.getInput();
    return info;
  }

  organizeMap(info) {
    const nameArr = info[0];
    const nameMap = new Map();
    for (const name of nameArr) {
      const dividedArr = this.divideName(name);
      for (const divided of dividedArr) {
        if (nameMap.has(divided)) {
          nameMap.set(divided, nameMap.get(divided) + 1);
        } else {
          nameMap.set(divided, 1);
        }
      }
    }
    return nameMap;
  }

  divideName(name) {
    let arr = [];
    for (let i = 0; i < name.length - 1; i++) {
      arr.push(name.slice(i, i + 2));
    }
    return new Set(arr);
  }
}

export default Controller;
