import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';
import fs from 'fs';
import Parser from '../model/Parser.js';

const InputView = {
  async readNames() {
    const result = await Console.readLineAsync(MESSAGE.NAMES);
    return result;
  },

  async readFoodInfo(name) {
    const result = await Console.readLineAsync(
      `${name}(이)가 못 먹는 메뉴를 입력해주세요.\n`
    );
    return result;
  },

  readMenuInfo() {
    const filePath = 'public/menu.md';
    const data = fs.readFileSync(filePath, 'utf-8');
    const menu = Parser.makeMenu(data);
    return menu;
  },
};

export default InputView;
