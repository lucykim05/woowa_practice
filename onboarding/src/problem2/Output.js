import { MissionUtils } from '@woowacourse/mission-utils';

class Output {
  static printStart() {
    MissionUtils.Console.print('| cryptogram        | result  |');
    MissionUtils.Console.print('| ----------------- | ------- |');
  }

  static printResult(message, result) {
    MissionUtils.Console.print(`| "${message}" | "${result}" |`);
  }
}

export default Output;
