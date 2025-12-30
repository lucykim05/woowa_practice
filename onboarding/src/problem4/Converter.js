/**
 * 기존 Convert의 경우 단계를 나누려고 하다 보니
 * 계속 순환을 하게 되는 것 같아 한번의 순환으로 끝낼 수 있는 코드를
 * 추가로 작성해봄
 */

class Converter {
  convert(input) {
    let result = '';
    for (const word of input) {
      if (word === ' ') result += ' ';
      const num = word.charCodeAt();
      if (num >= 97 && num <= 122) {
        const converted = 219 - num;
        const letter = String.fromCharCode(converted);
        result += letter;
      }
      if (num >= 65 && num <= 90) {
        const converted = 155 - num;
        const letter = String.fromCharCode(converted);
        result += letter;
      }
    }
    return result;
  }
}

export default Converter;
