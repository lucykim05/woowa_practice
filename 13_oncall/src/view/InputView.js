import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(MESSAGE.DATE);
    return input;
  },
  async readWorkDay() {
    const input = await Console.readLineAsync(MESSAGE.WORK_DAY);
    return input;
  },
  async readWeekEnd() {
    const input = await Console.readLineAsync(MESSAGE.WEEK_END);
    return input;
  },
};

export default InputView;
