import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';
import fs from 'fs';
import { parseCSV, uniqueName } from '../model/Parser.js';

class InputView {
  async readGoods() {
    const result = await MissionUtils.Console.readLineAsync(MESSAGE.GOODS);
    return result;
  }

  async readMembership() {
    const result = await MissionUtils.Console.readLineAsync(MESSAGE.MEMBERSHIP);
    return result;
  }

  async readMoreShopping() {
    const result = await MissionUtils.Console.readLineAsync(MESSAGE.SHOP_MORE);
    return result;
  }

  readGoodsInfo() {
    const filePath = 'public/products.md';
    const data = fs.readFileSync(filePath, 'utf-8');
    const parsedData = parseCSV(data);
    return parsedData;
  }

  getUniqueNames() {
    const filePath = 'public/products.md';
    const data = fs.readFileSync(filePath, 'utf-8');
    const names = uniqueName(data);
    return names;
  }

  readPromoInfo() {
    const filePath = 'public/promotions.md';
    const data = fs.readFileSync(filePath, 'utf-8');
    const parsedData = parseCSV(data);
    return parsedData;
  }
}

export default InputView;
