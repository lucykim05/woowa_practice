class Parser {
  constructor(letter, input) {
    this.letter = letter;
    this.input = input;
  }

  parse() {
    const regex = /[,:]/;
    const custom = this.letter[2];
    if (custom) {
      return this.input.split(regex).map((x) => x.split(custom));
    }
    return this.input.split(regex);
  }
}
