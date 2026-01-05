import { Random } from "@woowacourse/mission-utils";
import { MENU_SAMPLE, MSG_TOOL } from "../constants.js";

export class Coach {
  #name;
  #cantEat;
  #menuList;
  constructor(name) {
    this.#name = name;
    this.#menuList = [];
  }

  #pickMenu(menuList) {
    while (true) {
      const numList = Array.from({ length: menuList.length }, (_, i) => i + 1);
      const menuIdx = Random.shuffle(numList)[0] - 1;
      if (!this.#cantEat.includes(menuList[menuIdx])) {
        this.#saveMenu(menuList[menuIdx]);
        return;
      }
    }
  }

  #saveMenu(menu) {
    this.#menuList.push(menu);
  }

  saveCantEat(list) {
    this.#cantEat = list;
  }

  recommend(categoryIdx) {
    const menuList = MENU_SAMPLE[categoryIdx];
    this.#pickMenu(menuList);
  }

  makeResultMsg() {
    const msg = [this.#name, ...this.#menuList];
    let menuMsg = `${MSG_TOOL.START}${msg.join(MSG_TOOL.DELIMITER)}${
      MSG_TOOL.END
    }`;

    return menuMsg;
  }
}
