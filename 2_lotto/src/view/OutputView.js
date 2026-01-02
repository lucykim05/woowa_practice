import { MissionUtils } from '@woowacourse/mission-utils';

class OutputView {
  printAmount(input) {
    MissionUtils.Console.print(`\n${input}개를 구매했습니다.`);
  }

  printLottos(input) {
    MissionUtils.Console.print(input);
  }
}

export default OutputView;
