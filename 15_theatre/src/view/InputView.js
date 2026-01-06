import { Console } from '@woowacourse/mission-utils';
import fs from 'fs';
import ResultProcessor from '../model/ResultProcessor.js';

const InputView = {
  async read() {
    const input = await Console.readLineAsync();
    return input;
  },
  async read() {
    const input = await Console.readLineAsync();
    return input;
  },
  async read() {
    const input = await Console.readLineAsync();
    return input;
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
