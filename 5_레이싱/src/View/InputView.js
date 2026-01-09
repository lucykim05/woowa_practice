import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readNames() {
    const input = await Console.readLineAsync('이름 입력\n');
    return input.split(',').map((x) => x.trim());
  },

  async readCount() {
    const input = await Console.readLineAsync('숫자 입력\n');
    return Number(input);
  },
};

export default InputView;
