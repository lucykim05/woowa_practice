const ResultProcessor = {
  parseCSV(input) {
    const [headerLine, ...lines] = input
      .split('\n')
      .filter((line) => line.trim() !== '');

    const headers = headerLine.split(',').map((header) => header.trim());
    return lines.map((line) => {
      const values = line.split(',').map((value) => value.trim());
      return headers.reduce((obj, header, index) => {
        obj[header] =
          values[index] === 'null'
            ? null
            : isNaN(Number(values[index]))
            ? values[index]
            : Number(values[index]);
        return obj;
      }, {});
    });
  },
};

export default ResultProcessor;
