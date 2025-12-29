import InputView from './InputView.js';
import EmergencyScheduleGenerator from './EmergencyScheduleGenerator.js';
import OutputView from './OutputView.js';

class App {
  async run() {
    const monthAndDayOfWeek = await InputView.getMonthAndDayOfWeek();
    const month = Number(monthAndDayOfWeek[0]);
    const dayOfWeek = monthAndDayOfWeek[1];
    const workSchedule = await InputView.getEmergencyWorkSchedule();
    const weekDaySchedule = workSchedule[0];
    const offDaySchedule = workSchedule[1];
    const totalSchedule = EmergencyScheduleGenerator.generateEmergencySchedule(month, dayOfWeek, weekDaySchedule, offDaySchedule);
    OutputView.printSchedule(month, totalSchedule);
  }
}

export default App;
