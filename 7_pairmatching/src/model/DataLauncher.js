import { MISSION } from '../constants/constants.js';
import Mission from './Mission.js';
import Crew from './Crew.js';

class DataLauncher {
  constructor() {
    this.info = [];
    this.frontend = [];
    this.backend = [];
  }

  launch(backend, frontend) {
    this.makeCrew(backend, this.backend);
    this.makeCrew(frontend, this.frontend);
    const missions = MISSION.INFO;
    for (const mission of missions) {
      this.launchBackend(this.backend, mission);
      this.launchFrontend(this.frontend, mission);
    }
    return this.info;
  }

  makeCrew(names, arr) {
    for (const name of names) {
      arr.push(new Crew(name));
    }
  }

  launchBackend(crew, mission) {
    this.info.push(new Mission('백엔드', mission[0], mission[1], crew));
  }

  launchFrontend(crew, mission) {
    this.info.push(new Mission('프론트엔드', mission[0], mission[1], crew));
  }
}

export default DataLauncher;
