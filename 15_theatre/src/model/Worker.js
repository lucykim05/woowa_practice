class Worker {
  #database;

  constructor(database) {
    this.#database = database;
  }

  makeOldRequest(info) {
    this.#database.addReservation(info);
    const seats = info.seat;
    let total = 0;
    seats.forEach((x) => {
      this.#database.addSeat(info.theatre, info.time, x);
      total += this.calculatePrice(x);
    });
    this.#database.addPrice(total);
  }

  calculatePrice(seat) {
    const vip = ['A', 'B'];
    if (vip.includes(seat[0])) return 15000;
    return 10000;
  }
}

export default Worker;
