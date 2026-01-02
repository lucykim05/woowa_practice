import { MissionUtils } from '@woowacourse/mission-utils';
import { PRIZE } from '../constants/Message.js';

class OutputView {
  printAmount(input) {
    MissionUtils.Console.print(`\n${input}개를 구매했습니다.`);
  }

  printLottos(input) {
    MissionUtils.Console.print(input);
  }

  printResult(input) {
    const [a, b, c, d, e] = input;
    MissionUtils.Console.print(`\n당첨 통계\n---`);
    MissionUtils.Console.print(`3개 일치 (${PRIZE.FIFTH}) - ${a}개`);
    MissionUtils.Console.print(`4개 일치 (${PRIZE.FOURTH}) - ${b}개`);
    MissionUtils.Console.print(`5개 일치 (${PRIZE.THIRD}) - ${c}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (${PRIZE.SECOND}) - ${d}개`
    );
    MissionUtils.Console.print(`6개 일치 (${PRIZE.FIRST}) - ${e}개`);
  }
}

export default OutputView;
