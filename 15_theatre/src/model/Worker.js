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

  makeReservation(info) {
    const id = this.#database.getId();
    info.id = id;
    this.#database.addReservation(info);
    let total = 0;
    info.seat.forEach((x) => {
      this.#database.addSeat(info.theatre, info.time, x);
      total += this.calculatePrice(x);
    });
    this.#database.addPrice(total);
    return { info: info, total: total };
  }

  calculatePrice(seat) {
    const vip = ['A', 'B'];
    if (vip.includes(seat[0])) return 15000;
    return 10000;
  }
}

export default Worker;
