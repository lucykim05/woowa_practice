import { Console } from '@woowacourse/mission-utils';
import fs from 'fs';

const InputView = {
  readFile() {
    const filePath = 'public/attendances.csv';
    const data = fs.readFileSync(filePath, 'utf-8');
    return data
      .split('\n')
      .map((x) => x.trim())
      .slice(1);
  },

  async readCommand() {
    const result = await Console.readLineAsync('커맨드\n');
    return result;
  },

  async readNickname() {
    const result = await Console.readLineAsync('닉네임\n');
    return result;
  },

  async readTime() {
    const result = await Console.readLineAsync('시간\n');
    return result;
  },

  async readDate() {
    const result = await Console.readLineAsync('날짜\n');
    return result;
  },
};

export default InputView;
