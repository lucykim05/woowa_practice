import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants';

class Input {
  static async getAmount() {
    const amount = await MissionUtils.Console.readLineAsync(
      MESSAGE.AMOUNT_INPUT
    );
    return amount.split(',').map((x) => x.trim());
  }
}

export default Input;
