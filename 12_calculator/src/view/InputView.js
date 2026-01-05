import { MissionUtils } from '@woowacourse/mission-utils';

const InputView = {
  async readInput() {
    const result = await MissionUtils.Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    return result;
  },
};

export default InputView;
