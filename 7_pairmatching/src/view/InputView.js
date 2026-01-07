import { Console } from '@woowacourse/mission-utils';
import fs from 'fs';

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
