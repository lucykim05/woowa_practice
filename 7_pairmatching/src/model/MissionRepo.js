import Mission from './Mission.js';

class MissionRepo {
  #missions;

  constructor(missions) {
    this.#missions = missions;
  }

  getMissions() {
    return this.#missions;
  }
}

export default MissionRepo;
