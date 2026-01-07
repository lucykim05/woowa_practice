import { MISSION } from '../constants/constants.js';
import Mission from './Mission.js';

class DataLauncher {
  constructor() {
    this.info = [];
  }

  launch(backend, frontend) {
    const missions = MISSION.INFO;
    for (const mission of missions) {
      this.launchBackend(backend, mission);
      this.launchFrontend(frontend, mission);
    }
    return this.info;
  }

  launchBackend(crew, mission) {
    this.info.push(new Mission('백엔드', mission[0], mission[1], crew));
  }

  launchFrontend(crew, mission) {
    this.info.push(new Mission('프론트엔드', mission[0], mission[1], crew));
  }
}

export default DataLauncher;
