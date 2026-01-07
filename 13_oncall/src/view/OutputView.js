import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printResult(input) {
    const msg = input.holiday ? '(휴일)' : '';
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
