import Parser from '../model/Parser.js';
import { InputValidator } from '../model/Validator.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class Controller {
  // 입력 받아서 코치별로 못 먹는 음식 정리
  // CategoryManager 생성
  // while 문으로 결과 받음
  // 카테고리 별로 shuffle
  // 결과 최종 처리

  async readInput() {
    OutputView.printStart();
    const names = await this.readNames();
    const foodInfo = await this.readFoodInfo(names);
    const organizedInfo = Parser.organizeInfo(names, foodInfo);
  }

  async readNames() {
    const namesInput = await InputView.readNames();
    InputValidator.validateNames(namesInput);
    const namesArr = Parser.splitNames(namesInput);
    return namesArr;
  }

  async readFoodInfo(names) {
    const result = [];
    for (const name of names) {
      const info = await InputView.readFoodInfo(name);
      const arr = info.split(',').map((x) => x.trim());
      InputValidator.validateMenu(arr);
      result.push(arr);
    }
    return result;
  }
}

export default Controller;
