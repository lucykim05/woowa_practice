class Database {
  #reservation;
  #seat;
  #totalQuantity;
  #totalPrice;

  constructor() {
    this.#reservation = [];
    this.#seat = [];
    this.#totalQuantity = 1;
    this.#totalPrice = 0;
  }

  addReservation(input) {
    this.#reservation.push(input);
    this.#totalQuantity += 1;
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

  getId() {
    const num = this.#totalQuantity;
    return `R${String(num).padStart(3, '0')}`;
  }
}

export default Database;
