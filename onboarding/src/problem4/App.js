import Input from './Input.js';
import Validator from './Validator.js';
import Convert from './Convert.js';
import Converter from './Converter.js';
import Output from './Output.js';

class App {
  async run() {
    const message = await Input.getMessage();
    const input = message.split('');
    const validator = new Validator();
    validator.validate(input);
    // const converter = new Convert(arr);
    // console.log(converter.convert(arr));
    // 이전 버전의 변환 로직
    const convert = new Converter(input);
    const result = convert.convert(input);
    Output.printStart();
    Output.printResult(message, result);
  }
}

export default App;
