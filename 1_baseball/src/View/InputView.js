import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/Message.js';

class InputView {
  readInput() {
    const number = MissionUtils.Console.readAsyncLine(MESSAGE.READ_NUMBER);
    return number;
  }
}
