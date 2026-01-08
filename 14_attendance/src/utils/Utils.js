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

  makeNewDate(dateNumber) {
    const year = DateTimes.now().getFullYear();
    const month = DateTimes.now().getMonth() + 1;
    const msg = `${year}-${month}-${dateNumber}`;
    return new Date(msg);
  },

  makeAlertMsg(total) {
    if (total > 5) return '제적';
    if (total >= 3) return '면담';
    if (total >= 2) return '경고';
    return '';
  },
};

export default Utils;
