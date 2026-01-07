import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(MESSAGE.DATE);
    return input.split(',').map((x) => x.trim());
  },
  async readWorkDay() {
    const input = await Console.readLineAsync(MESSAGE.WORK_DAY);
    return input.split(',').map((x) => x.trim());
  },
  async readWeekEnd() {
    const input = await Console.readLineAsync(MESSAGE.WEEK_END);
    return input.split(',').map((x) => x.trim());
  },
};

export default InputView;
