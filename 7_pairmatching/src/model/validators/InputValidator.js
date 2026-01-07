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
};

export const DataValidator = {
  validateRequest(input) {
    const [course, level, name] = input;
    const request = [level, name];
    if (!MISSION.INFO.includes(request)) throw new Error(ERROR.NO_RESULT);
  },
};
