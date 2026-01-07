import { ERROR } from '../constants/error.js';

class Validator {
  #parser;

  constructor(parser) {
    this.#parser = parser;
  }

  validateCommand(input) {
    const arr = ['Q', '1', '2', '3', '4'];
    if (!arr.includes(input)) throw new Error(ERROR.FORMAT);
  }

  validateInfoRequest(theatre, time) {
    this.validateTheatre(theatre);
    this.validateTime(time);
  }

  validateReservation(theatre, time, seat, people) {}

  validateTheatre(theater) {
    const arr = ['A', 'B', 'C'];
    if (!arr.includes(theater)) throw new Error(ERROR.TEATHRE);
  }

  validateTime(time) {
    const arr = [10, 14, 18, 22];
    if (!arr.includes(time)) throw new Error(ERROR.TIME);
  }
}

export default Validator;
