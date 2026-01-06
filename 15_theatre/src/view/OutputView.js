import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStart() {
    Console.print('영화관 예매 시스템에 오신 것을 환영합니다.');
  },
  printInfo(theater, time, input) {
    Console.print(`\n${theater} 상영관 ${time}시 상영 좌석 현황`);
    Console.print('  1 2 3 4 5 6 7 8 9 10');
    const msg = this.makeMsg(input);
    Console.print(msg);
    Console.print(
      `\nVIP석: 20석, 일반석: 30석 중 ${50 - input.total}석 예매 가능`
    );
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
  print(input) {
    Console.print();
  },
  makeMsg(input) {
    const a = this.makeRow(input.A);
    const b = this.makeRow(input.B);
    const c = this.makeRow(input.C);
    const d = this.makeRow(input.D);
    const e = this.makeRow(input.E);
    return `A ${a}\nB ${b}\nC ${c}\nD ${d}\nE ${e}`;
  },
  makeRow(input) {
    let msg = '';
    for (let i = 1; i <= 10; i++) {
      if (input.includes(i)) {
        msg += 'O ';
        continue;
      }
      msg += 'X ';
    }
    return msg;
  },
};

export default OutputView;
