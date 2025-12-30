import Controller from './Controller.js';
import InputView from './Input.js';
import Validator from './Validator.js';

class App {
  async run() {
    try {
      const info = await InputView.getInput();
      console.log(info); //디버깅용
      this.validate(info);

      //디버깅용
      const controller = new Controller();
      const nameMap = controller.findDuplicate(info);
      console.log(nameMap);
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
}

export default App;
