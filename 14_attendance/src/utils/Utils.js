import { DateTimes } from '@woowacourse/mission-utils';

const Utils = {
  checkWorkday(number) {
    const month = DateTimes.now().getMonth() + 1;
    const year = DateTimes.now().getFullYear();
    const today = new Date(`${year}-${month}-${number}`);
    const day = today.getDay();
    if (day >= 1 && day <= 5) return true;
    return false;
  },

  checkStatus(info) {
    const [date, time] = info.split(' ');
    const day = new Date(date).getDay();
    const [hour, minute] = time.split(':').map(Number);
    const total = hour * 60 + minute;
    if (day === 1) return this.checkMondayStatus(total);
    return this.checkOtherStatus(total);
  },

  checkMondayStatus(total) {
    if (total <= 785) return '출석';
    if (total <= 810) return '지각';
    return '결석';
  },

  checkOtherStatus(total) {
    if (total <= 605) return '출석';
    if (total <= 630) return '지각';
    return '결석';
  },
};

export default Utils;
