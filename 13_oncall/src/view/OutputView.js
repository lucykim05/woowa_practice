import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printResult(input, msg) {
    Console.print(
      `${input.month}월 ${input.date}일 ${input.day}${msg} ${input.worker}`
    );
  },
  // print(input) {
  //   Console.print();
  // },
  // print(input) {
  //   Console.print();
  // },
  // print(input) {
  //   Console.print();
  // },
  // print(input) {
  //   Console.print();
  // },
};

export default OutputView;
