import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/Message.js';
import Validator from '../utils/Validator.js';

class InputView {
  static async readType() {
    const gameType = await MissionUtils.Console.readLineAsync(
      MESSAGE.READ_TYPE
    );
    const type = Number(gameType);
    Validator.validateType(type);
    return type;
  }

  static async readNames() {
    const names = await MissionUtils.Console.readLineAsync(MESSAGE.READ_NAME);
    const arr = names.split(',').map((x) => {
      const trimmed = x.trim();
      Validator.validateName(trimmed);
      return trimmed;
    });
    return arr;
  }

  static async readCount() {
    const input = await MissionUtils.Console.readLineAsync(MESSAGE.READ_COUNT);
    const count = Number(input);
    Validator.validateNum(count);
    return count;
  }

  static async readUserName() {
    const name = await MissionUtils.Console.readLineAsync(
      MESSAGE.READ_USER_NAME
    );
    Validator.validateName(name);
    return name;
  }

  static async readOtherNames() {
    const names = await MissionUtils.Console.readLineAsync(
      MESSAGE.READ_OTHERS_NAME
    );
    const arr = names.split(',').forEach((x) => {
      x = x.trim();
      Validator.validateName(x);
    });
    return arr;
  }

  static async read_RETRY() {
    const input = await MissionUtils.Console.readLineAsync(MESSAGE.RETRY);
    const retry = Number(input);
    Validator.validateRetry(retry);
    return retry;
  }
}

export default InputView;
