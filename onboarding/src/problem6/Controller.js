class Controller {
  findDuplicate(info) {
    const [nameArr, emailArr] = info;
    const nameMap = this.organizeMap(nameArr);
    const duplicateArr = this.findDuplicateName(nameMap);
    const idx = this.findName(duplicateArr, nameArr);
    const result = this.getEmail(idx, emailArr);
    return result;
  }

  organizeMap(nameArr) {
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

  findDuplicateName(nameMap) {
    let duplicateArr = [];
    nameMap.forEach((value, key) => {
      if (value >= 2) {
        duplicateArr.push(key);
      }
    });
    return duplicateArr;
  }

  findName(duplicateArr, nameArr) {
    let arr = [];
    for (const letter of duplicateArr) {
      for (const name of nameArr) {
        if (name.includes(letter)) {
          arr.push(nameArr.indexOf(name));
        }
      }
    }
    return new Set(arr);
  }

  getEmail(idx, emailArr) {
    let result = [];
    for (const index of idx) {
      result.push(emailArr[index]);
    }
    return result.sort();
  }
}

export default Controller;
