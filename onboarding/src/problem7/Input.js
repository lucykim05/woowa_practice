import { MissionUtils } from '@woowacourse/mission-utils';

class Input {
  async getUserName() {
    const username = await MissionUtils.Console.readLineAsync(
      '유저 이름을 입력해주세요.\n'
    );
    return username;
  }
}

export default Input;
