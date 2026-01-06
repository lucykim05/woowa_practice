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

  start() {}

  makeOldReservation() {
    const data = InputView.readOldReservation();
  }
}

export default Controller;
