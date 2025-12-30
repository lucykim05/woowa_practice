import { MissionUtils } from '@woowacourse/mission-utils';

class Output {
  static printStart() {
    MissionUtils.Console.print(
      '| money | result                      |\n| ----- | --------------------------- |'
    );
  }

  static printResult(amount, result) {
    MissionUtils.Console.print(`| ${amount} | [${result.join(', ')}] |`);
  }
}

export default Output;
