import Utils from '../utils/Utils.js';
import { DATE } from '../constants/constants.js';
import { Console, DateTimes } from '@woowacourse/mission-utils';

const OutputView = {
  printAttendResult(info) {
    const month = DateTimes.now().getMonth() + 1;
    const date = info.date;
    const dayName = DATE.DAY_NAME[Utils.makeNewDate(date).getDay()];
    const time = info.time;
    const status = info.status;
    Console.print(
      `${month}월 ${String(date).padStart(
        2,
        '0'
      )}일 ${dayName}요일 ${time} (${status})`
    );
  },

  printResetResult(originalData, info) {
    const month = DateTimes.now().getMonth() + 1;
    const date = info.date;
    const dayName = DATE.DAY_NAME[Utils.makeNewDate(date).getDay()];
    const originalTime = originalData.time;
    const modifiedTime = info.time;
    const originalStatus = originalData.status;
    const modifiedStatus = info.status;
    Console.print(
      `${month}월 ${String(date).padStart(
        2,
        '0'
      )}일 ${dayName}요일 ${originalTime} (${originalStatus}) -> ${modifiedTime} (${modifiedStatus}) 수정 완료!`
    );
  },

  printStatus(arr) {
    const [a, b, c] = arr;
    const total = c + Math.floor(b / 3);
    Console.print(`\n출석: ${a}회\n지각: ${b}회\n결석: ${c}회`);
    if (total >= 2) this.printAlert(total);
  },

  printAlert(total) {
    const msg = Utils.makeAlertMsg(total);
    Console.print(`\n${msg} 대상자입니다.`);
  },

  printList(input) {
    Console.print('\n제적 위험자 조회 결과');
    input.forEach((x) => {
      const msg = '(' + Utils.makeAlertMsg(x.total) + ')';
      const crew = x.crew;
      Console.print(
        `- ${crew.name}: 결석 ${crew.absent.length}회, 지각 ${crew.late.length}회 ${msg}`
      );
    });
  },
};

export default OutputView;
