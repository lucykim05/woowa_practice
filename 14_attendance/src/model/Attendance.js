class Attendance {
  constructor(date) {
    this.date = date;
    this.time = '--:--';
    this.status = '결석';
  }

  checkAttend() {
    if (this.time === '--:--') return false;
    return true;
  }
}

export default Attendance;
