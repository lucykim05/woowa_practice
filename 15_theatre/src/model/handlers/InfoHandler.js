import ResultProcessor from '../ResultProcessor.js';

class InfoHandler {
  #parser;

  constructor(parser) {
    this.#parser = parser;
  }

  getInfo(theater, time) {
    const info = this.#parser.getSeatInfo(theater, time);
    const seatResult = ResultProcessor.makeSeatInfo(info);
    const result = this.countSeat(seatResult);
    return result;
  }

  countSeat(result) {
    let total = 0;
    total +=
      result['A'].length +
      result['B'].length +
      result['C'].length +
      result['D'].length +
      result['E'].length;
    result['command'] = '1';
    result['total'] = total;
    return result;
  }
}

export default InfoHandler;
