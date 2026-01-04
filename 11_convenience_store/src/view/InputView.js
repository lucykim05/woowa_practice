import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';

class InputView {
  readGoods() {
    MissionUtils.Console.readLineAsync(MESSAGE.GOODS);
  }

  readMembership() {
    MissionUtils.Console.readLineAsync(MESSAGE.MEMBERSHIP);
  }

  readMoreShopping() {
    MissionUtils.Console.readLineAsync(MESSAGE.SHOP_MORE);
  }
}

export default InputView;
