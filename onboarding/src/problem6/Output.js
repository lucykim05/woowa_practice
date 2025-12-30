import { MissionUtils } from '@woowacourse/mission-utils';

class Output {
  static printStart(arr, result) {
    MissionUtils.Console.print('forms | result');
    MissionUtils.Console.print('----------------------------');
    MissionUtils.Console.print(
      `${JSON.stringify(arr)} | ${JSON.stringify(result)}`
    );
  }
}

export default Output;
