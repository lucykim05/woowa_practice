import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';

const InputView = {
  async readNames() {
    const result = await Console.readLineAsync(MESSAGE.NAMES);
    return result;
  },

  async readFoodInfo(name) {
    const result = await Console.readLineAsync(
      `${name}(이)가 못 먹는 메뉴를 입력해주세요.`
    );
    return result;
  },
};

export default InputView;
