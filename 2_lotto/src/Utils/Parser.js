export const Parser = {
  comma(input) {
    return input.split(",").map((v) => v.trim());
  },
};
