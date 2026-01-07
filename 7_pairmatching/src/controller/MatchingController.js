import DataLauncher from '../model/DataLauncher.js';
import MissionRepo from '../model/MissionRepo.js';
import InputView from '../view/InputView.js';
import {
  InputValidator,
  DataValidator,
} from '../model/validators/InputValidator.js';
import { Console } from '@woowacourse/mission-utils';
import CommandHandler from '../model/CommandHandler.js';
import OutputView from '../view/OutputView.js';

class MatchingController {
  #repo;
  #handler;

  initMission() {
    const frontend = InputView.readFrontend();
    const backend = InputView.readBackend();
    const launcher = new DataLauncher();
    const info = launcher.launch(backend, frontend);
    const repo = new MissionRepo(info);
    this.#repo = repo;
    this.#handler = new CommandHandler(repo);
  }

  async start() {
    while (true) {
      const command = await InputView.readCommand();
      InputValidator.validateCommand(command);
      if (command !== 'Q') await this.process(command);
      if (command === 'Q') break;
    }
  }

  async process(command) {
    const result = await this.#readRequest(command);
    this.printResult(result, command);
  }

  async #readRequest(command) {
    try {
      const input = await InputView.readRequest();
      const filteredData = this.#repo.filter(input);
      DataValidator.validateRequest(filteredData);
      const result = await this.validateMissionInput(filteredData[0], command);
      return this.#handler.runCommand(result.command, result.data);
    } catch (error) {
      Console.print(error.message);
      await this.#readRequest();
    }
  }

  async validateMissionInput(input, command) {
    const bool = input.match.length !== 0;
    InputValidator.validateCommandData(command, bool);
    if (command === '1' && bool) {
      const answer = await InputView.readRematch();
      if (answer === '아니오') throw new Error();
    }
    return { data: input, command: command };
  }

  printResult(result, command) {
    if (command === '3') OutputView.printReset();
    if (command !== '3') OutputView.printResult(result.msg);
  }
}

export default MatchingController;
