import { MissionUtils } from '@woowacourse/mission-utils';

class Input {
  static async getMessage() {
    const message = await MissionUtils.Console.readLineAsync(
      '문장을 입력해주세요.\n'
    );
    return message;
  }
}

export default Input;
