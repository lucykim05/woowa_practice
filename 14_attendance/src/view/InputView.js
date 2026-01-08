import fs from 'fs';

const InputView = {
  readFile() {
    const filePath = 'public/attendances.csv';
    const data = fs.readFileSync(filePath, 'utf-8');
    return data
      .split('\n')
      .map((x) => x.trim())
      .slice(1);
  },
};

export default InputView;
