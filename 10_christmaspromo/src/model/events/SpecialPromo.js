class SpecialPromo {
  canApply(date, order) {
    const arr = [3, 10, 17, 24, 25, 31];
    return arr.includes(date);
  }

  apply(date, order, customer) {
    customer.setFreeAmount('특별 할인', 1000);
  }
}

export default SpecialPromo;
