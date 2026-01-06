import Database from '../model/Database.js';
import InputView from '../view/InputView.js';

class Controller {
  #database;
  #parser;
  #worker;
  #validator;

  init() {
    const database = new Database();
    this.#database = database;
    this.#parser = new Parser(database);
    this.#worker = new Worker(database);
    this.#validator = new Validator(this.#parser);
  }

  async start() {
    OutputView.printStart();
    while (true) {
      const input = await InputView.readCommand();
      this.#validator.validateCommand(input);
      if (input === 'Q') return;
      if (input === '1') return await this.showInfo();
      if (input === '2') return;
      if (input === '3') return;
      if (input === '4') return;
    }
  }

  async showInfo() {
    const theatre = await InputView.readTheatre();
    const time = await InputView.readTime();
    this.#validator.validateInfoRequest(theatre, time);
  }

  makeOldReservation() {
    const data = InputView.readOldReservation();
  }
}

export default Controller;
