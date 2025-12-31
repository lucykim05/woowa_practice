import Output from './Output.js';
import Result from './Result.js';

class App {
  async run() {
    try {
      const result = await Result.getResult();
      Output.printResult(result);
    } catch (error) {
      console.error(error);
    }
  }
}

export default App;
