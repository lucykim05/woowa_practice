import ChristmasDday from './events/ChristmasDday.js';
import SpecialPromo from './events/SpecialPromo.js';
import WeekendPromo from './events/WeekendPromo.js';
import WorkdayPromo from './events/WorkdayPromo.js';

class EventCalculator {
  constructor(date, order, customer) {
    this.date = date;
    this.order = order;
    this.customer = customer;
    this.events = [
      new ChristmasDday(),
      new WorkdayPromo(),
      new WeekendPromo(),
      new SpecialPromo(),
    ];
  }

  calculate() {
    this.events.forEach((x) => {
      if (x.canApply(this.date, this.order))
        x.apply(this.date, this.order, this.customer);
    });
  }
}

export default EventCalculator;
