import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';
import fs from 'fs';
import parseCSV from '../model/Parser.js';

class InputView {
  readGoods() {
    MissionUtils.Console.readLineAsync(MESSAGE.GOODS);
  }

  readMembership() {
    MissionUtils.Console.readLineAsync(MESSAGE.MEMBERSHIP);
  }

  readMoreShopping() {
    MissionUtils.Console.readLineAsync(MESSAGE.SHOP_MORE);
  }

  readGoodsInfo() {
    const filePath = 'public/products.md';
    const data = fs.readFileSync(filePath, 'utf-8');
    const parsedData = parseCSV(data);
    return parsedData;
  }

  readPromoInfo() {
    const filePath = 'public/promotions.md';
    const data = fs.readFileSync(filePath, 'utf-8');
    const parsedData = parseCSV(data);
    return parsedData;
  }
}

export default InputView;
