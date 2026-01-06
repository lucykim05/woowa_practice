import Database from '../model/Database.js';
import InfoHandler from '../model/handlers/InfoHandler.js';
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
      if (input === '2') return await this.makeReservation();
      if (input === '3') return await this.cancelReservation();
      if (input === '4') return this.getStatus();
    }
  }

  async showInfo() {
    const theatre = await InputView.readTheatre();
    const time = await InputView.readTime();
    this.#validator.validateInfoRequest(theatre, time);
    const handler = new InfoHandler();
    return handler.getInfo(theatre, time);
  }

  makeOldReservation() {
    const data = InputView.readOldReservation();
    for (const request of data) {
      this.requestReservation(request);
    }
  }

  requestReservation(request) {}

  async makeReservation() {
    const theatre = await InputView.readTheatre();
    const time = await InputView.readTime();
    const seat = await InputView.readSeat();
    const people = await InputView.readPeople();
    this.#validator.validateReservation(theatre, time, seat, people);
    const handler = new ReservationHandler(this.#worker);
    return handler.make(theatre, time, seat);
  }

  async cancelReservation() {
    const number = await InputView.readCancel();
    this.#validator.validateCancel(number);
    const handler = new CancelHandler(this.#worker, this.#parser);
    return handler.cancel(number);
  }

  getStatus() {
    const handler = new StatusHandler(this.#parser);
    return handler.getResult();
  }
}

export default Controller;
