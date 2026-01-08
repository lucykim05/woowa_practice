import { DateTimes } from '@woowacourse/mission-utils';
import Utils from '../utils/Utils.js';
import Crew from './Crew.js';

class Repository {
  constructor() {
    this.crews = new Map();
    this.monthDays = [];
  }

  setData(data) {
    this.setMonthArr();
    const splitted = data.map((x) => x.split(',').map((x) => x.trim()));
    const nicknames = this.getNickNames(splitted);
    this.nicknames = nicknames;
    for (const nickname of nicknames) {
      const filtered = splitted
        .filter((x) => x[0] === nickname)
        .map((x) => x[1]);
      this.makeCrew(nickname, filtered);
    }
  }

  showList() {
    const result = this.makeTotalList();
    const sorted = result
      .sort(function (a, b) {
        return a.name.localeCompare(b.name);
      })
      .sort((a, b) => b.total - a.total);
    return sorted;
  }

  makeTotalList() {
    const result = [];
    this.nicknames.forEach((x) => {
      const crew = this.crews.get(x);
      const absent = crew.absent.length;
      const late = crew.late.length;
      const total = Math.floor(late / 3) + absent;
      result.push({ crew: crew, total: total });
    });
    return result;
  }

  makeCrew(name, data) {
    const crew = new Crew(name);
    this.crews.set(name, crew);
    this.monthDays.forEach((x) => {
      const filtered = data.filter((y) => new Date(y).getDate() === x);
      if (filtered.length === 0) crew.makeEmptyAttend(x);
      if (filtered.length !== 0) crew.makeFirstAttend(filtered[0]);
    });
  }

  getNickNames(data) {
    const arr = [];
    data.forEach((x) => {
      arr.push(x[0]);
    });
    return [...new Set(arr)];
  }

  setMonthArr() {
    const today = DateTimes.now().getDate();
    for (let i = 1; i <= today; i++) {
      if (Utils.checkWorkday(i)) this.monthDays.push(i);
    }
  }
}

export default Repository;
