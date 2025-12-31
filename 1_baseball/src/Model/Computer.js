import { Random } from "@woowacourse/mission-utils";
import { RESULT_INDEX, RESULT_MSG } from "../constants.js";

export class Computer {
  #computerNumsArr;
  constructor() {
    this.#pickRandomNum();
  }

  #pickRandomNum() {
    //비교하기 쉽게 오름차순 정렬하여 저장
    this.#computerNumsArr = Random.pickUniqueNumbersInRange(1, 9, 3).sort(
      (a, b) => a - b
    );
  }

  compareNumber(userNumArr) {
    let result = [0, 0, false];
    for (let i = 0; i < userNumArr.length; i++) {
      const userNum = userNumArr[i];
      if (userNum === this.#computerNumsArr[i]) {
        result[RESULT_INDEX.STRIKE]++;
        continue;
      }
      if (this.#computerNumsArr.includes(userNum)) {
        result[RESULT_INDEX.BALL]++;
        continue;
      }
    }

    if (result[0] === 0 && result[1] === 0) result[RESULT_INDEX.NOTHING] = true;
    return this.#resultMsg(result);
  }

  #resultMsg(result) {
    if (result[RESULT_INDEX.NOTHING]) return RESULT_MSG.NOTHING;

    let msg = "";
    if (result[RESULT_INDEX.STRIKE] > 0)
      msg += `${result[RESULT_INDEX.STRIKE]}${RESULT_MSG.STRIKE} `;
    if (result[RESULT_INDEX.BALL] > 0)
      msg += `${result[RESULT_INDEX.BALL]}${RESULT_MSG.BALL}`;

    return msg;
  }
}
