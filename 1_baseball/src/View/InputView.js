import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/Message.js';
import Validator from '../utils/Validator.js';

class InputView {
  async readInput() {
    const number = await MissionUtils.Console.readLineAsync(
      MESSAGE.READ_NUMBER
    );
    Validator.validateNumber(Number(number));
    return Number(number);
  }

  async readStart() {
    const start = await MissionUtils.Console.readLineAsync(MESSAGE.READ_RETRY);
    Validator.validateStart(start);
    return start;
  }
}

export default InputView;
