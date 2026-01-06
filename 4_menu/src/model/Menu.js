import fs from 'fs';

const filePath = '../constants/menu.md';

const data = fs.readFileSync(filePath, 'utf-8');

const splitted = data.split('\n').filter((x) => x !== '');

const categorized = splitted.map((x) => x.split(':')).filter((x) => x !== '');

const menuArr = [];
const categoryNumber = new Map();
categoryNumber
  .set('일식', 1)
  .set('한식', 2)
  .set('중식', 3)
  .set('양식', 4)
  .set('아시안', 5);

categorized.forEach((x) => {
  const [name, foods] = x;
  const arr = foods.split(',').map((x) => x.replace(/[^가-힣]/g, ''));
  arr.forEach((x) => {
    menuArr.push({
      number: categoryNumber.get(name),
      category: name,
      name: x,
    });
  });
});

console.log(menuArr);

export const menu = menuArr;
