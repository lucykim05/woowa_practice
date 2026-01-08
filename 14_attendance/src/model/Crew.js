import { DateTimes } from '@woowacourse/mission-utils';
import Utils from '../utils/Utils.js';
import Attendance from './Attendance.js';

class Crew {
  constructor(name) {
    this.name = name;
    this.attendances = new Map();
    this.attend = [];
    this.late = [];
    this.absent = [];
  }

  addAttend(time) {
    const [hour, minute] = time.split(':').map(Number);
    const info = this.attendances.get(DateTimes.now().getDate());
    info.time = time;
    this.makeStatus(
      DateTimes.now().getDay(),
      DateTimes.now().getDate(),
      hour,
      minute
    );
    return info;
  }

  makeEmptyAttend(number) {
    const attendance = new Attendance(number);
    this.attendances.set(number, attendance);
    this.absent.push(number);
  }

  makeFirstAttend(info) {
    const [date, time] = info.split(' ');
    const number = new Date(date).getDate();
    const attendance = new Attendance(number);
    this.attendances.set(number, attendance);
    attendance.time = time;
    const status = Utils.checkStatus(info);
    attendance.status = status;
    this.processStatus(number, status);
  }

  makeStatus(dayNumber, dateNumber, hour, minute) {
    let msg = '';
    if (dayNumber === 1) msg = Utils.checkMondayStatus(hour * 60 + minute);
    if (dayNumber !== 1) msg = Utils.checkOtherStatus(hour * 60 + minute);
    this.processStatus(dateNumber, msg);
  }

  processStatus(number, status) {
    if (status === '결석') this.absent.push(number);
    if (status === '지각') this.late.push(number);
    if (status === '출석') this.attend.push(number);
    const info = this.attendances.get(number);
    info.status = status;
  }

  checkAttend(number) {
    const info = this.attendances.get(number);
    return info.checkAttend();
  }

  getAllInfo(arr) {
    const result = [];
    arr.forEach((x) => result.push(this.attendances.get(x)));
    const number = DateTimes.now().getDate();
    const attend = this.attend.filter((x) => x !== number);
    const late = this.late.filter((x) => x !== number);
    const absent = this.absent.filter((x) => x !== number);
    const status = [attend.length, late.length, absent.length];
    return { info: result, status: status };
  }

  deleteDate(number) {
    this.absent = this.absent.filter((x) => x !== number);
    this.late = this.late.filter((x) => x !== number);
    this.attend = this.attend.filter((x) => x !== number);
  }
}

export default Crew;
