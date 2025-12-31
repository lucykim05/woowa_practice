import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constants/Message.js';

class Output {
  static printGameStart() {
    MissionUtils.Console.print(MESSAGE.START_GAME);
  }

  static printRoundResult(result) {
    MissionUtils.Console.print(`${result}`);
  }

  static printGameResult(count) {
    MissionUtils.Console.print(MESSAGE.END_GAME);
    MissionUtils.Console.print(`총 ${count}번의 라운드를 진행하셨습니다.`);
  }
}

export default Output;
