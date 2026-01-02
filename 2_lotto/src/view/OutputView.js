import { MissionUtils } from '@woowacourse/mission-utils';
import { PRIZE } from '../constants/Message.js';

class OutputView {
  printAmount(input) {
    MissionUtils.Console.print(`\n${input}개를 구매했습니다.`);
  }

  printLottos(input) {
    input.forEach((x) => {
      MissionUtils.Console.print('[' + x.join(', ') + ']');
    });
  }

  printResult(input) {
    MissionUtils.Console.print(`\n당첨 통계\n---`);
    MissionUtils.Console.print(
      `3개 일치 (${PRIZE[5].toLocaleString()}원) - ${input.get(5)}개`
    );
    MissionUtils.Console.print(
      `4개 일치 (${PRIZE[4].toLocaleString()}원) - ${input.get(4)}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (${PRIZE[3].toLocaleString()}원) - ${input.get(3)}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (${PRIZE[2].toLocaleString()}원) - ${input.get(
        2
      )}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (${PRIZE[1].toLocaleString()}원) - ${input.get(1)}개`
    );
  }

  printProfit(input) {
    MissionUtils.Console.print(`총 수익률은 ${input}%입니다.`);
  }
}

export default OutputView;
