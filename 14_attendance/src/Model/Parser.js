export const Parser = {
  rawFile(file) {
    const fileArr = file.split("\r\n");
    //필요 없는 값 제거
    fileArr.shift();
    fileArr.pop;

    return fileArr;
  },
  parse(data, delimiter) {
    return data.split(delimiter);
  },
};
