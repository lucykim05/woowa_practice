import { InputValidator } from '../model/Validator.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class Controller {
  // 시작 문구 출력
  // 입력 받아서 코치별로 못 먹는 음식 정리
  // CategoryManager 생성
  // while 문으로 결과 받음
  // 카테고리 별로 shuffle
  // 결과 최종 처리

  async readInput() {
    OutputView.printStart();
  }

  async readNames() {
    const namesInput = await InputView.readNames();
    InputValidator.validateNames(namesInput);
  }
}

export default Controller;
