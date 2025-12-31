import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/Message.js';
import Validator from '../utils/Validator.js';

class InputView {
  static async readInput() {
    const number = await MissionUtils.Console.readLineAsync(
      MESSAGE.READ_NUMBER
    );
    Validator.validateNumber(number);
    return number;
  }

  static async readStart() {
    const start = await MissionUtils.Console.readLineAsync(MESSAGE.READ_RETRY);
    Validator.validateStart(Number(start));
    return Number(start);
  }
}

export default InputView;
