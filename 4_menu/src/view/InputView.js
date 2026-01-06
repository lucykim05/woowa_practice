import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';

const InputView = {
  async readNames() {
    const result = await Console.readLineAsync(MESSAGE.NAMES);
    return result;
  },
};

export default InputView;
