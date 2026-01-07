import { Console } from '@woowacourse/mission-utils';
import fs from 'fs';
import { MESSAGE } from '../constants/constants.js';

const InputView = {
  async readCommand() {
    const input = await Console.readLineAsync(MESSAGE.COMMAND);
    return input;
  },
  async readRequest() {
    const input = await Console.readLineAsync(MESSAGE.MISSION_REQUEST);
    return input.split(',').map((x) => x.trim());
  },
  async readRematch() {
    const input = await Console.readLineAsync(MESSAGE.RESET);
    return input;
  },
  async read() {
    const input = await Console.readLineAsync();
    return input;
  },
  readBackend() {
    const filePath = 'public/backend-crew.md';
    const data = fs.readFileSync(filePath, 'utf-8');
    return data.split(' ').map((x) => x.trim());
  },
  readFrontend() {
    const filePath = 'public/frontend-crew.md';
    const data = fs.readFileSync(filePath, 'utf-8');
    return data.split(' ').map((x) => x.trim());
  },
};

export default InputView;
