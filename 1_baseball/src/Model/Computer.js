import { Random } from "@woowacourse/mission-utils";
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
}
