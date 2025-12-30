import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class Input {
  async getUserName() {
    const username = await MissionUtils.Console.readLineAsync(
      '유저 이름을 입력해주세요.\n'
    );
    Validator.validateId(username);
    return username;
  }

  async getFriend() {
    const friendArr = await MissionUtils.Console.readLineAsync(
      '친구 관계 배열을 입력해주세요.\n'
    );
  }
}

export default Input;
