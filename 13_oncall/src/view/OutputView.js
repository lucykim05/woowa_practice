import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printResult(input) {
    Console.print(
      `${input.month}월 ${input.date}일 ${input.day} ${input.worker}`
    );
  },
  printHoliday(input) {
    Console.print(
      `${input.month}월 ${input.date}일 ${input.day}(휴일) ${input.worker}`
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
