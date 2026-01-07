import DataLauncher from '../model/DataLauncher.js';
import MissionRepo from '../model/MissionRepo.js';
import InputView from '../view/InputView.js';
import MatchingService from '../model/MatchingService.js';

class MatchingController {
  #repo;
  #service;

  initMission() {
    const frontend = InputView.readFrontend();
    const backend = InputView.readBackend();
    const launcher = new DataLauncher();
    const info = launcher.launch(backend, frontend);
    const repo = new MissionRepo(info);
    this.#repo = repo;
    this.#service = new MatchingService(repo);
  }
}

export default MatchingController;
