import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';

class InputView {
  async readAmount() {
    return await MissionUtils.Console.readLineAsync(MESSAGE.AMOUNT);
  }

  async readGoods() {
    return await MissionUtils.Console.readLineAsync(MESSAGE.GOODS);
  }

  async readUserAmount() {
    return await MissionUtils.Console.readLineAsync(MESSAGE.USER_AMOUNT);
  }

  async readUserGoods() {
    return await MissionUtils.Console.readLineAsync(MESSAGE.USER_GOODS);
  }
}

export default InputView;
