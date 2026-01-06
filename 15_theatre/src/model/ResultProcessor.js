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

  makeSeatInfo(data) {
    const A = [];
    const B = [];
    const C = [];
    const D = [];
    const E = [];
    const info = data.seat;
    info.forEach((x) => {
      x.split('');
      if (x[0] === 'A') A.push(Number(x[1]));
      if (x[0] === 'B') B.push(Number(x[1]));
      if (x[0] === 'C') C.push(Number(x[1]));
      if (x[0] === 'D') D.push(Number(x[1]));
      if (x[0] === 'E') E.push(Number(x[1]));
    });
    return { A: A, B: B, C: C, D: D, E: E };
  },
};

export default ResultProcessor;
