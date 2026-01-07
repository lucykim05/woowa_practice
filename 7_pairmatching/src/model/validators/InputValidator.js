import { ERROR, INPUT, MISSION } from '../../constants/constants.js';

export const InputValidator = {
  validateCommand(input) {
    if (!INPUT.COMMAND.includes(input)) throw new Error(ERROR.COMMAND);
  },

  validateRequest(input) {
    const [course, level, name] = input;
    if (!MISSION.COURSE.includes(course)) throw new Error(ERROR.CLASS);
    if (!MISSION.LEVEL.includes(level)) throw new Error(ERROR.LEVEL);
    if (!MISSION.NAME.includes(name)) throw new Error(ERROR.NAME);
  },

  validateCommandData(command, bool) {
    if (command === '2' && !bool) throw new Error('[ERROR] 조회할 정보 없음');
    if (command === '3' && !bool) throw new Error('[ERROR] 초기화할 정보 없음');
  },
};

export const DataValidator = {
  validateRequest(input) {
    if (input.length === 0) throw new Error(ERROR.NO_RESULT);
  },
};
