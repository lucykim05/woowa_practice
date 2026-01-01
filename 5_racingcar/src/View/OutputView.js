import { MissionUtils } from '@woowacourse/mission-utils';

class OutputView {
  static printStart() {
    MissionUtils.Console.print('\n실행 결과');
  }

  static printResult(name, num) {
    const msg = '-'.repeat(num);
    MissionUtils.Console.print(`${name} : ${msg}`);
  }

  static printWinner(winner) {
    const msg = winner.join(', ');
    MissionUtils.Console.print(`\n최종 우승자 : ${msg}`);
  }

  static printNothing() {
    MissionUtils.Console.print('');
  }

  static printRound(count) {
    MissionUtils.Console.print(`${count} 라운드`);
  }

  static printNewResult(num) {
    MissionUtils.Console.print(`${num} 라운드에 우승하셨습니다.`);
  }
}

export default OutputView;
