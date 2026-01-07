import { ERROR, INPUT } from '../../constants/constants.js';

const InputValidator = {
  validateCommand(input) {
    if (!INPUT.COMMAND.includes(input)) throw new Error(ERROR.COMMAND);
  },
};

export default InputValidator;
