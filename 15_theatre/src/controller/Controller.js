import Database from '../model/Database.js';
import InfoHandler from '../model/handlers/InfoHandler.js';
import InputView from '../view/InputView.js';
import Validator from '../model/Validator.js';
import Parser from '../model/Parser.js';
import Worker from '../model/Worker.js';
import ReservationHandler from '../model/handlers/ReservationHandler.js';
import OutputView from '../view/OutputView.js';

class Controller {
  #database;
  #parser;
  #worker;
  #validator;
  #reservationHandler;

  init() {
    const database = new Database();
    this.#database = database;
    this.#parser = new Parser(database);
    const worker = new Worker(database);
    this.#worker = worker;
    this.#validator = new Validator(this.#parser);
    this.#reservationHandler = new ReservationHandler(worker);
  }

  async start() {
    OutputView.printStart();
    while (true) {
      const input = await InputView.readCommand();
      this.#validator.validateCommand(input);
      if (input === 'Q') return;
      if (input === '1') await this.showInfo();
      if (input === '2') await this.makeReservation();
      if (input === '3') await this.cancelReservation();
      if (input === '4') this.getStatus();
    }
  }

  async showInfo() {
    const theater = await InputView.readTheatre();
    const time = await InputView.readTime();
    this.#validator.validateInfoRequest(theater, time);
    const handler = new InfoHandler(this.#parser);
    const result = handler.getInfo(theater, time);
    OutputView.printInfo(theater, time, result);
  }

  makeOldReservation() {
    const data = InputView.readOldReservation();
    for (const request of data) {
      this.#reservationHandler.request(request);
    }
  }

  async makeReservation() {
    const theater = await InputView.readTheatre();
    const time = await InputView.readTime();
    const seat = await InputView.readSeat();
    const people = await InputView.readPeople();
    this.#validator.validateReservation(theater, time, seat, people);
    return this.#reservationHandler.make(theater, time, seat);
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
