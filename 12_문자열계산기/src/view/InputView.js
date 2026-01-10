import { Console } from '@woowacourse/mission-utils';

const Input = {
  async readInput() {
    const input = await Console.readLineAsync('문자열 입력');
    return input;
  },
};

export default Input;
