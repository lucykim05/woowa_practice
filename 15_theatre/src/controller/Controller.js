import Database from '../model/Database.js';

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

  makeOldReservation() {}
}

export default Controller;
