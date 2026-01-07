import DataLauncher from '../model/DataLauncher.js';
import MissionRepo from '../model/MissionRepo.js';
import InputView from '../view/InputView.js';
import MatchingService from '../model/MatchingService.js';
import {
  InputValidator,
  DataValidator,
} from '../model/validators/InputValidator.js';
import { Console } from '@woowacourse/mission-utils';

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

  async process(input) {
    const request = await this.#readRequest();
    const result = this.#service.checkCommand({
      command: input,
      info: request,
    });
  }

  async #readRequest() {
    try {
      const input = await InputView.readRequest();
      InputValidator.validateRequest(input);
      DataValidator.validateRequest(input);
      return input;
    } catch (error) {
      Console.print(error.message);
      await this.process(command);
    }
  }
}

export default MatchingController;
