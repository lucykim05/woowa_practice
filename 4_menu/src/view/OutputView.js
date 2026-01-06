import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStart() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  printCategory(input) {
    Console.print('\n메뉴 추천 결과입니다.');
    const message = input.join(' | ');
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    Console.print(`[ 카테고리 | ${message} ]`);
  },

  printMenu(name, menu) {
    const message = menu.join(' | ');
    Console.print(`[ ${name} | ${message} ]`);
  },

  printEnd() {
    Console.print('\n추천을 완료했습니다.');
  },
};

export default OutputView;
