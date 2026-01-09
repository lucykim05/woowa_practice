const Validator = {
  validateNumber(input) {
    if (Number.isNaN(input)) throw new Error(ERROR.NUMBER);
    if (!Number.isInteger(input)) throw new Error(ERROR.NUMBER);
    if (input < 1) throw new Error(ERROR.NUMBER);
  },
};

export default Validator;
