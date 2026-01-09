import { Console } from '@woowacourse/mission-utils';
import { PROMPT } from '../constants/constants.js';

const OutputView = {
  printResultStart() {
    Console.print(PROMPT.RESULT);
  },

  printCarResult(input) {
    const name = input.name;
    const position = input.car.position;
    const msg = '-'.repeat(position);
    Console.print(`${name} : ${msg}`);
  },

  printWinner(input) {
    const msg = input.join(', ');
    Console.print(`${PROMPT.WINNER}${msg}`);
  },
};

export default OutputView;
