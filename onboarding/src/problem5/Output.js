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

  static printUnit(unit) {
    MissionUtils.Console.print(
      `\n금액을 나눈 단위는 다음과 같습니다.\n${unit}`
    );
  }
}

export default Output;
