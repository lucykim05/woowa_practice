export const parser = (value) => {
  return value.split(",").map((v) => v.trim());
};
