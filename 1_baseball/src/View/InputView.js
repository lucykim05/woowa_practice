import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/Message.js';
import Validator from '../utils/Validator.js';

class InputView {
  async readInput() {
    const number = await MissionUtils.Console.readLineAsync(
      MESSAGE.READ_NUMBER
    );
    Validator.validateNumber(number);
    return number;
  }
}

export default InputView;
