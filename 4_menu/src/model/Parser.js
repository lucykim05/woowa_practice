const Parser = {
  organizeCategory(data) {
    const splitted = data.split('\n').filter((x) => x !== '');
    const categorized = splitted
      .map((x) => x.split(':'))
      .filter((x) => x !== '');

    const menuArr = this.makeObj(categorized);
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
          name: x,
        });
      });
    });
    return menuArr;
  },
};

export default Parser;
