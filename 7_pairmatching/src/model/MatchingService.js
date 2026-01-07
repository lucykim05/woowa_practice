class MatchingService {
  #repo;

  constructor(repo) {
    this.#repo = repo;
  }

  checkCommand(input) {
    const command = input.command;
    if (command === '1') return this.match(input);
    if (command === '2') return this.status(input);
    if (command === '3') return this.reset(input);
    if (command === 'rematch') return this.rematch(input);
  }

  match(input) {}
}

export default MatchingService;
