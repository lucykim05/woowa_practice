import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Message.js';

class InputView {
  async readAmount() {
    const amount = await MissionUtils.Console.readLineAsync(MESSAGE.AMOUNT);
    return amount;
  }

  async readWinningNumbers() {
    const winning = await MissionUtils.Console.readLineAsync(MESSAGE.WINNING);
    return winning.split(',').map((x) => x.trim());
  }

  async readBonusNumber() {
    const bonus = await MissionUtils.Console.readLineAsync(MESSAGE.BONUS);
    return bonus;
  }
}

export default InputView;
