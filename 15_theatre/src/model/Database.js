class Database {
  #reservation;
  #seat;
  #totalQuantity;
  #totalPrice;

  constructor() {
    this.#reservation = [];
    this.#seat = [];
    this.#totalQuantity = 0;
    this.#totalPrice = 0;
  }

  addReservation(input) {
    this.#reservation.push(input);
  }

  addSeat(theater, time, input) {
    const filtered = this.#seat
      .filter((x) => x.theater === theater)
      .filter((x) => x.time === time);
    if (filtered.length === 0) {
      const arr = [input];
      this.#seat.push({ theater: theater, time: time, seat: arr });
      return;
    }
    const arr = filtered[0].seat;
    arr.push(input);
    filtered[0].seat = arr;
  }

  addPrice(input) {
    this.#totalPrice += input;
  }

  getSeatData() {
    return this.#seat;
  }
}

export default Database;
