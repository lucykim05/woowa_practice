import DataLauncher from '../model/DataLauncher.js';
import MissionRepo from '../model/MissionRepo.js';
import InputView from '../view/InputView.js';
import MatchingService from '../model/MatchingService.js';
import InputValidator from '../model/validators/InputValidator.js';

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

  async start() {
    while (true) {
      const command = await InputView.readCommand();
      InputValidator.validateCommand(command);
      if (command !== 'Q') this.process(command);
      if (command === 'Q') break;
    }
  }

  process(command) {}
}

export default MatchingController;
