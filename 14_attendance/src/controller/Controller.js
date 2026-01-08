import InputView from '../view/InputView.js';
import Repository from '../model/Repository.js';
import Validator from '../model/Validator.js';
import { DateTimes } from '@woowacourse/mission-utils';
import Utils from '../utils/Utils.js';
import OutputView from '../view/OutputView.js';

class Controller {
  initialize() {
    this.dateNumber = DateTimes.now().getDate();
    const data = InputView.readFile();
    this.repo = new Repository();
    this.repo.setData(data);
  }

  async start() {
    while (true) {
      const command = await InputView.readCommand();
      if (command === 'q') break;
      if (command === '1') await this.attend();
      if (command === '2') await this.reset();
      if (command === '3') await this.info();
      if (command === '4') this.showList();
    }
  }

  async attend() {
    Validator.validateDate(DateTimes.now().getDate(), this.repo.monthDays);
    const nickname = await this.getNickname();
    const time = await this.getTime();
    const crew = this.repo.crews.get(nickname);
    if (crew.checkAttend(DateTimes.now().getDate()))
      throw new Error('[ERROR] 수정해라');
    const info = crew.addAttend(time);
    OutputView.printAttendResult(info);
  }

  async reset() {
    const [crew, number, time] = await this.readResetInfo();
    const info = crew.attendances.get(number);
    const originalData = { time: info.time, status: info.status };
    const day = Utils.makeNewDate(number).getDay();
    info.time = time;
    const [hour, minute] = time.split(':').map(Number);
    crew.makeStatus(day, number, hour, minute);
    OutputView.printResetResult(originalData, info);
  }

  async info() {
    const nickname = await this.getNickname();
    const crew = this.repo.crews.get(nickname);
    const filtered = this.repo.monthDays.filter(
      (x) => x !== DateTimes.now().getDate()
    );
    const result = crew.getAllInfo(filtered);
    result.info.forEach((x) => OutputView.printAttendResult(x));
    OutputView.printStatus(result.status);
  }

  async showList() {
    const result = this.repo.showList();
    OutputView.printList(result);
  }

  async readResetInfo() {
    const nickname = await this.getNickname();
    const dateNumber = await this.getDateNumber();
    const time = await this.getTime();
    const crew = this.repo.crews.get(nickname);
    crew.deleteDate(dateNumber);
    return [crew, dateNumber, time];
  }

  async getNickname() {
    const nickname = await InputView.readNickname();
    Validator.validateNickname(nickname, this.repo);
    return nickname;
  }

  async getTime() {
    const time = await InputView.readTime();
    Validator.validateTime(time);
    return time;
  }

  async getDateNumber() {
    const dateNumber = await InputView.readDate();
    Validator.validateDate(Number(dateNumber), this.repo.monthDays);
    return Number(dateNumber);
  }
}

export default Controller;
