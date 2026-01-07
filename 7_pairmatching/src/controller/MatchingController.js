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

  async process(command) {
    const result = await this.makeRequest(command);
  }

  async makeRequest(input) {
    const request = await this.#readRequest();
    const result = this.#service.checkCommand({
      command: input,
      info: request,
    });
    if (result.command === 'check-rematch')
      return await this.#checkReMatch(result);
    return result;
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

  async #checkReMatch(result) {
    const answer = await InputView.readReset();
    if (answer === '예')
      return this.#service.checkCommand((result.command = 'rematch'));
    return (result.command = 'no-rematch');
  }
}

export default MatchingController;
