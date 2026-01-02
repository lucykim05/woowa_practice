import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Message.js';

class InputView {
  async readAmount() {
    const amount = MissionUtils.Console.readLineAsync(MESSAGE.AMOUNT);
    return amount;
  }

  async readWinningNumbers() {
    const winning = MissionUtils.Console.readLineAsync(MESSAGE.WINNING);
    return winning.split(',').map((x) => x.trim());
  }

  async readBonusNumber() {
    const bonus = MissionUtils.Console.readLineAsync(MESSAGE.BONUS);
    return bonus;
  }
}

export default InputView;
