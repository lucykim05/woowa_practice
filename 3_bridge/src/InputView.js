import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constants.js';

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    const length = await MissionUtils.Console.readLineAsync(MESSAGE.LENGTH);
    return length;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    const move = await MissionUtils.Console.readLineAsync(MESSAGE.MOVE);
    return move;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  async readGameCommand() {
    const retry = await MissionUtils.Console.readLineAsync(MESSAGE.RETRY);
    return retry;
  },
};

export default InputView;
