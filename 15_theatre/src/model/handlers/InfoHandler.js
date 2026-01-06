import ResultProcessor from '../ResultProcessor.js';

class InfoHandler {
  #parser;

  constructor(parser) {
    this.#parser = parser;
  }

  getInfo(theatre, time) {
    const info = this.#parser.getInfo(theatre, time);
    const result = ResultProcessor.makeSeatInfo(info);
    return result;
  }
}

export default InfoHandler;
