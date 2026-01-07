import Mission from './Mission.js';

class MissionRepo {
  #missions;

  constructor(missions) {
    this.#missions = missions;
  }

  filter(info) {
    const [course, level, name] = info;
    const filtered = this.#missions
      .filter((x) => x.course === course)
      .filter((x) => x.name === name);
    return filtered;
  }

  getMissions() {
    return this.#missions;
  }
}

export default MissionRepo;
