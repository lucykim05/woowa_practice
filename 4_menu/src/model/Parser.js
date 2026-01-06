import Menu from './menu.js';

const Parser = {
  makeMenu(data) {
    const splitted = data.split('\n').filter((x) => x !== '');
    const categorized = splitted
      .map((x) => x.split(':'))
      .filter((x) => x !== '');

    const menuArr = this.organizeArr(categorized);
    return menuArr;
  },

  organizeArr(categorizedArr) {
    const menuArr = [];

    categorizedArr.forEach((x) => {
      const [name, foods] = x;
      const arr = foods.split(',').map((x) => x.replace(/[^가-힣]/g, ''));
      arr.forEach((x) => {
        menuArr.push({
          category: name,
          menuName: x,
        });
      });
    });
    return menuArr;
  },

  splitNames(input) {
    console.log(input.split(',').map((x) => x.trim()));
    return input.split(',').map((x) => x.trim());
  },

  organizeInfo(names, foodInfo) {
    const result = [];
    for (let i = 0; i < names.length; i++) {
      result.push({
        name: names[i],
        food: foodInfo[i],
      });
    }
    return result;
  },

  organizeSameCategory(category) {
    const arr = [];
    Menu.filter((x) => x.category === category).forEach((x) => {
      arr.push(x.menuName);
    });
    return arr;
  },
};

export default Parser;
