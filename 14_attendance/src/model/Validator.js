import { DateTimes } from '@woowacourse/mission-utils';
import { DATE } from '../constants/constants';
import Utils from '../utils/Utils';

const Validator = {
  validateNickname(input, repo) {
    const map = repo.crews.get(input);
    if (!map) throw new Error('[ERROR] 등록되지 않은 닉네임입니다.');
  },

  validateTime(time) {
    const [hour, minute] = time.split(':').map(Number);
    if (
      Number.isNaN(hour) ||
      hour < 8 ||
      hour > 23 ||
      minute < 0 ||
      minute > 59
    )
      throw new Error('[ERROR] 잘못된 형식을 입력하였습니다.');
  },

  validateDate(number, arr) {
    if (Number.isNaN(number)) throw new Error('[ERROR] 숫자아님');
    if (!arr.includes(number)) {
      const month = DateTimes.now().getMonth() + 1;
      const dayName = DATE.DAY_NAME[Utils.makeNewDate(number).getDay()];
      throw new Error(
        `[ERROR] ${month}월 ${number}일 ${dayName}요일은 등교하는 날이 아닙니다.`
      );
    }
  },
};

export default Validator;
