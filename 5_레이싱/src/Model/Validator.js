const Validator = {
  validateNames(input) {
    const result = input.map((x) => x.replace(/[^a-z]/g, ''));
    result.forEach((x) => {
      if (x === '') throw new Error('[ERROR] 이름 영어');
    });
  },

  validateCount(input) {
    if (Number.isNaN(input)) throw new Error('숫자아님');
    if (!Number.isInteger(input)) throw new Error('정수 아님');
    if (input < 1) throw new Error('자연수 아님');
  },
};

export default Validator;
