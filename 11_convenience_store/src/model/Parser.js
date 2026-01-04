export function parseCSV(data) {
  const [headerLine, ...lines] = data
    .split('\n')
    .filter((line) => line.trim() !== '');

  const headers = headerLine.split(',').map((header) => header.trim());

  return lines.map((line) => {
    const values = line.split(',').map((value) => value.trim());
    return headers.reduce((obj, header, index) => {
      obj[header] =
        values[index] === 'null'
          ? null
          : !Number.isNaN(Number(values[index]))
          ? Number(values[index])
          : values[index];
      return obj;
    }, {});
  });
}

export function uniqueName(data) {
  const [headerLine, ...lines] = data
    .split('\n')
    .filter((line) => line.trim() !== '');

  const names = [];
  for (const x of lines) {
    const arr = x.split(',');
    names.push(arr[0]);
  }
  return [...new Set(names)];
}
