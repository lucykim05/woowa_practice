import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants.js';

class Input {
  static async getAmount() {
    const amount = await MissionUtils.Console.readLineAsync(
      MESSAGE.AMOUNT_INPUT
    );
    return amount.split(',').map(Number);
  }
}

export default Input;
