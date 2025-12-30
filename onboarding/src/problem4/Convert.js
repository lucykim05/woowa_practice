class Convert {
  convert(input) {
    const charInput = this.getCharCode(input);
    const oppInput = this.changeNum(charInput);
    const result = this.getString(oppInput);
    return result;
  }

  getCharCode(input) {
    const result = [];
    for (const word of input) {
      if (word === ' ') result.push(' ');
      result.push(word.charCodeAt(0));
    }
    return result;
  }

  changeNum(input) {
    const result = [];
    for (const word of input) {
      if (word === ' ') result.push(' ');
      if (word >= 97 && word <= 122) result.push(219 - word);
      if (word >= 65 && word <= 90) result.push(155 - word);
    }
    return result;
  }

  getString(input) {
    const result = [];
    for (const word of input) {
      if (word === ' ') result.push(' ');
      result.push(String.fromCharCode(word));
    }
    return result.join('');
  }
}

export default Convert;
