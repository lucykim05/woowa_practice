import { Console } from '@woowacourse/mission-utils';

export default OutputView = {
  printCarResult(input) {
    const name = input.name;
    const position = input.position;
    const msg = '-'.repeat(position);
    Console.print(`${name} : ${msg}`);
  },

  printWinner(input) {
    const msg = input.join(', ');
    Console.print(`최종 우승자 : ${msg}`);
  },
};
