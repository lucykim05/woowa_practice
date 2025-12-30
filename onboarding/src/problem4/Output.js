import { MissionUtils } from '@woowacourse/mission-utils';

class Output {
  static printStart() {
    MissionUtils.Console.print(
      '| word         | result       |\n| ------------ | ------------ |'
    );
  }

  static printResult(input, result) {
    MissionUtils.Console.print(`| "${input}" | "${result}" |`);
  }
}

export default Output;
