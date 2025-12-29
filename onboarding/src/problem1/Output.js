import { MissionUtils } from '@woowacourse/mission-utils';

class Output {
  static printName(a, b) {
    MissionUtils.Console.print(`| ${a}       | ${b}      | result |`);
    MissionUtils.Console.print(`| ---------- | ---------- | ------ |`);
  }

  static printRoundResult(a, b, c) {
    MissionUtils.Console.print(`| [${a.page}]   | [${b.page}] | ${c}      |`);
  }
}

export default Output;
