import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readAmount() {
    const input = await Console.readLineAsync('금액\n');
    return Number(input);
  },
  async readWinningNumbers() {
    const input = await Console.readLineAsync('당첨번호\n');
    return input
      .split(',')
      .map((x) => x.trim())
      .map(Number);
  },
  async readBonusNumber() {
    const input = await Console.readLineAsync('보너스번호\n');
    return Number(input);
  },
  async read() {
    const input = await Console.readLineAsync();
    return input;
  },
};

export default InputView;
