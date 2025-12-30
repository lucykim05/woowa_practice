import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constants.js';
import Validator from './Validator.js';

class InputView {
  async getInput() {
    const num = await this.getNumber();
    const info = await this.getInfo(num);
    Validator.validateNumber(info, num);
    return info;
  }

  async getNumber() {
    const number = await MissionUtils.Console.readLineAsync(
      MESSAGE.NUMBER_INPUT
    );
    return number;
  }

  async getInfo(number) {
    let nameArr = [];
    let emailArr = [];
    MissionUtils.Console.print(
      `크루의 정보를 이름, 이메일 형식으로 ${number}번 입력해주세요.`
    );
    for (let i = 0; i < number; i++) {
      const input = await MissionUtils.Console.readLineAsync('');
      const info = input.split(',').map((x) => x.trim());
      const [a, b] = info;
      nameArr.push(a);
      emailArr.push(b);
    }
    MissionUtils.Console.print('입력이 완료되었습니다.');
    return [nameArr, emailArr];
  }
}

export default InputView;
