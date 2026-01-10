const Validator = {
  validateCustom(input) {
    if (!Number.isNaN(Number(input))) throw new Error();
  },

  validateArr(arr) {
    arr.forEach((x) => {
      if (Number.isNaN(x)) throw new Error('[ERROR]');
      if (x < 0) throw new Error('[ERROR]');
    });
  },
};

export default Validator;
