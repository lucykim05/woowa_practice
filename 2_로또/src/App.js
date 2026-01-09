import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
