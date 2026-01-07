class ReservationHandler {
  #worker;

  constructor(worker) {
    this.#worker = worker;
  }

  request(info) {
    const id = info.reservation_id;
    const theatre = info.theater;
    const time = info.time;
    const seats = info.seats.split('-');
    this.#worker.makeOldRequest({
      id: id,
      theatre: theatre,
      time: time,
      seat: seats,
    });
  }

  make(theater, time, seat) {
    const result = this.#worker.makeReservation({
      theater: theater,
      time: time,
      seat: seat,
    });
    this.info = reservationInfo;
    this.total = totalPrice;
  }
}

export default ReservationHandler;
