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
}

export default ReservationHandler;
