import { Console } from '@woowacourse/mission-utils';
import { LOTTO } from '../constants/constants.js';

const OutputView = {
  printAmount(input) {
    Console.print(`${input}개를 구매했습니다.`);
  },
  printLotto(input) {
    Console.print(input);
  },
  printResult(input) {
    const [a, b, c, d, e] = input;
    Console.print(`${LOTTO.RESULT[5]}${e}개`);
    Console.print(`${LOTTO.RESULT[4]}${d}}개`);
    Console.print(`${LOTTO.RESULT[3]}${c}개`);
    Console.print(`${LOTTO.RESULT[2]}${b}개`);
    Console.print(`${LOTTO.RESULT[1]}${a}개`);
  },
  printProfit(input) {
    Console.print(`총 수익률은 ${input}%입니다.`);
  },
  print(input) {
    Console.print();
  },
  print(input) {
    Console.print();
  },
  print(input) {
    Console.print();
  },
};

export default OutputView;
