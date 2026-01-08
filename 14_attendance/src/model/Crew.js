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

  makeEmptyAttend(number) {
    const attendance = new Attendance(number);
    this.attendances.set(number, attendance);
    this.absent.push(number);
  }

  makeAttend(info) {
    const [date, time] = info.split(' ');
    const number = new Date(date).getDate();
    const attendance = new Attendance(number);
    attendance.time = time;
    const status = Utils.checkStatus(info);
    attendance.status = status;
    this.processStatus(number, status);
  }

  processStatus(number, status) {
    if (status === '결석') this.absent.push(number);
    if (status === '지각') this.late.push(number);
    if (status === '출석') this.attend.push(number);
  }
}

export default Crew;
