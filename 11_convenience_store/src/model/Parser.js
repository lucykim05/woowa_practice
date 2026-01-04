export default function parseCSV(data) {
  const [headerLine, ...lines] = data
    .split('\n')
    .filter((line) => line.trim() !== '');

  const headers = headerLine.split(',').map((header) => header.trim());

  return lines.map((line) => {
    const values = line.split(',').map((value) => value.trim());
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index] === 'null' ? null : values[index];
      return obj;
    }, {});
  });
}
