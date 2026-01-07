import { Random } from '@woowacourse/mission-utils';
import RandomHandler from '../RandomHandler.js';

class CommandHandler {
  constructor(repo) {
    this.repo = repo;
  }

  runCommand(command, data) {
    if (command === '2') return this.status(data);
    if (command === '3') return this.reset(data);
    if (data.match.length === 0) return this.makeMatch(data);
    return this.reMatch(data);
  }

  status(data) {
    const matchResult = data.match.map((x) => x.map((y) => y.name));
    const result = matchResult.map((x) => x.join(' : ')).join('\n');
    console.log(result);
    return { command: '2', msg: result };
  }

  reset(data) {
    data.resetMatch();
    return { command: '3', msg: '초기화 되었습니다.' };
  }

  makeMatch(data) {
    const randomHandler = new RandomHandler(data);
    const result = randomHandler.makeMatch();
    if (result.length === 0) throw new Error('[ERROR] 페어 매칭 실패');
    data.makeMatch(result);
    const a = data.match.map((x) => x.map((y) => y.name));
    const msg = a.map((x) => x.join(' : ')).join('\n');
    return { command: '1', msg: msg };
  }

  reMatch(data) {
    data.resetMatch();
    this.makeMatch(data);
  }
}

export default CommandHandler;
