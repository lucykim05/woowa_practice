import { MISSION } from '../constants/constants.js';

class Crew {
  constructor(name) {
    this.name = name;
    this.pair = [];
  }

  makeMatch(mission, pair) {
    this.pair.push({ mission: mission, name: pair });
  }

  resetMatch(mission) {
    this.pair = this.pair.filter((x) => x.mission !== mission);
  }

  getPairInfo(level) {
    let arr = [];
    const missions = MISSION.INFO.filter((x) => x[0] === level).map(
      (x) => x[1]
    );
    for (const mission of missions) {
      const filtered = this.pair.filter((x) => x.mission === mission);
      if (filtered.length !== 0) arr.push(filtered[0].name);
    }
    return arr;
  }
}

export default Crew;
