import { MissionUtils } from '@woowacourse/mission-utils';
import IdValidator from './utils/IdValidator.js';
import FriendValidator from './utils/FriendValidator.js';
import VisitorValidator from './utils/VisitorValidator.js';

class Input {
  async getUserName() {
    const username = await MissionUtils.Console.readLineAsync(
      '유저 이름을 입력해주세요.\n'
    );
    IdValidator.validateId(username);
    return username;
  }

  async getFriend() {
    const input = await MissionUtils.Console.readLineAsync(
      '친구 관계 배열을 입력해주세요.\n'
    );
    const friend = JSON.parse(input);
    const friendArr = FriendValidator.validateFriend(friend);
    return friendArr;
  }

  async getVisitor() {
    const input = await MissionUtils.Console.readLineAsync(
      '방문객 배열을 입력해주세요.\n'
    );
    const visitor = JSON.parse(input);
    const visitorArr = VisitorValidator.validateVisitor(visitor);
    return visitorArr;
  }
}

export default Input;
