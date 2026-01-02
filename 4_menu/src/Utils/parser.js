export const parseWithComma = (value) => {
  return value.split(",").map((v) => v.trim());
};

export const getAll2DimArrayValues = (array) => {
  const allValues = [];
  array.map((row) => allValues.push(...row));
  return allValues;
};
