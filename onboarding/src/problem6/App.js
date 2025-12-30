import Controller from './Controller.js';
import InputView from './Input.js';
import Output from './Output.js';
import Validator from './Validator.js';

class App {
  async run() {
    try {
      const info = await InputView.getInput();
      this.validate(info);
      const arr = this.organizeInfo(info);

      const controller = new Controller();
      const result = controller.findDuplicate(info);

      Output.printStart(arr, result);
    } catch (error) {
      console.error(error);
    }
  }

  validate(info) {
    const [nameArr, emailArr] = info;
    const validator = new Validator();
    nameArr.forEach((name) => {
      validator.validateName(name);
    });
    emailArr.forEach((email) => {
      validator.validateEmail(email);
    });
  }

  organizeInfo(info) {
    let result = [];
    const [nameArr, emailArr] = info;
    for (let i = 0; i < nameArr.length; i++) {
      result.push([emailArr[i], nameArr[i]]);
    }
    return result;
  }
}

export default App;
