import { Console } from '@woowacourse/mission-utils';
import fs from 'fs';
import ResultProcessor from '../model/ResultProcessor.js';
import { MESSAGE } from '../constants/message.js';

const InputView = {
  async readCommand() {
    const input = await Console.readLineAsync(MESSAGE.COMMAND);
    return input;
  },
  async readTheatre() {
    const input = await Console.readLineAsync(MESSAGE.THEATRE);
    return input;
  },
  async readTime() {
    const input = await Console.readLineAsync(MESSAGE.TIME);
    return Number(input);
  },
  async read() {
    const input = await Console.readLineAsync();
    return input;
  },

  readOldReservation() {
    const filePath = 'public/reservation.csv';
    const data = fs.readFileSync(filePath, 'utf-8');
    const reservation = ResultProcessor.parseCSV(data);
    return reservation;
  },
};

export default InputView;
