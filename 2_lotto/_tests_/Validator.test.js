import { Validator } from "../src/Model/Validator.js";

describe("Validator.bonusNum 기능 단위 테스트", () => {
  test("당첨번호와 중복 값", () => {
    const input = 3;
    const winningNum = [1, 2, 3, 4, 5, 6];
    expect(() => {
      Validator.bonusNum(winningNum, input);
    }).toThrow("[ERROR]");
  });

  test("올바른 보너스 번호 입력값", () => {
    const winningNum = [1, 2, 3, 4, 5, 6];
    const input = 7;

    expect(() => {
      Validator.bonusNum(winningNum, input);
    }).not.toThrow(); // 에러가 안 나야 함
  });
});
