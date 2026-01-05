class Matcher {
  match(input) {
    const start = this.checkStart(input);
    const end = this.checkEnd(input);
    if (start && end) return input[2];
  }

  checkStart(input) {
    return input.slice(0, 2) === '//';
  }

  checkEnd(input) {
    return input.slice(3, 5) === '\\n';
  }
}

export default Matcher;
