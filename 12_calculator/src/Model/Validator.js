export const Validator = {
  validate(input) {
    //숫자 0이 아니면서 값이 올바르지 않은 것 검증
    if (!input && input !== 0) throw Error();
    //숫자 정수인지 확인
    if (Number.isInteger(input)) throw Error();
    //숫자로 형변환 시 오류가 남 = 숫자가 아님
    if (Number.isNaN(Number(input))) throw Error();
  },
};
