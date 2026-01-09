import { Console } from '@woowacourse/mission-utils';
import { PROMPT } from '../constants/constants.js';

const InputView = {
  async readNames() {
    const input = await Console.readLineAsync(PROMPT.NAME);
    return input.split(',').map((x) => x.trim());
  },

  async readCount() {
    const input = await Console.readLineAsync(PROMPT.COUNT);
    return Number(input);
  },
};

export default InputView;
