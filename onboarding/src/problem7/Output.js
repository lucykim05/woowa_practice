import { MissionUtils } from '@woowacourse/mission-utils';

class Output {
  static printResult(result) {
    if (!result || result.length === 0)
      throw new Error('[ERROR] 추천할 사람이 없습니다.');
    MissionUtils.Console.print('\n------------결과 출력------------');
    MissionUtils.Console.print(result);
  }
}

export default Output;
