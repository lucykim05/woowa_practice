import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/Message.js';

class InputView {
  static async readType() {
    const gameType = await MissionUtils.Console.readLineAsync(
      MESSAGE.READ_TYPE
    );
    return gameType;
  }

  static async readNames() {
    const names = await MissionUtils.Console.readLineAsync(MESSAGE.READ_NAME);
    const arr = names.split(',').map((x) => x.trim());
    return arr;
  }

  static async readCount() {
    const count = await MissionUtils.Console.readLineAsync(MESSAGE.READ_COUNT);
    return count;
  }

  static async readUserName() {
    const name = await MissionUtils.Console.readLineAsync(
      MESSAGE.READ_USER_NAME
    );
    return name;
  }

  static async readOtherNames() {
    const names = await MissionUtils.Console.readLineAsync(
      MESSAGE.READ_OTHERS_NAME
    );
    const arr = names.split(',').map((x) => x.trim());
    return arr;
  }

  static async read_RETRY() {
    const input = await MissionUtils.Console.readLineAsync(MESSAGE.RETRY);
    return input;
  }
}

export default InputView;
