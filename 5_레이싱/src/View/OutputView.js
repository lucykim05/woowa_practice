import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printCarResult(input) {
    const name = input.name;
    const position = input.car.position;
    const msg = '-'.repeat(position);
    Console.print(`${name} : ${msg}`);
  },

  printWinner(input) {
    const msg = input.join(', ');
    Console.print(`최종 우승자 : ${msg}`);
  },
};

export default OutputView;
