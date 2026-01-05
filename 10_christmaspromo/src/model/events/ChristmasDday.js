class ChristmasDday {
  canApply(date, order) {
    return date <= 25;
  }

  apply(date, order, customer) {
    const amount = 1000 + (date - 1) * 100;
    customer.setFreeAmount('크리스마스 디데이 할인', amount);
  }
}

export default ChristmasDday;
