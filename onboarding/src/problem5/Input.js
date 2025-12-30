import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants.js';

class Input {
  static async getAmount() {
    const amount = await MissionUtils.Console.readLineAsync(
      MESSAGE.AMOUNT_INPUT
    );
    return amount.split(',').map(Number);
  }

  static async getUnit() {
    const unit = await MissionUtils.Console.readLineAsync(MESSAGE.UNIT_INPUT);
    return unit.split(',').map(Number);
  }
}

export default Input;
