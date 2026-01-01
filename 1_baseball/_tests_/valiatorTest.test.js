import { validator } from "../src/Model/validators/validator.js";
import { TYPE } from "../src/constants.js";

describe("validator 테스트", () => {
  test("정상적인 값", () => {
    const input = [1, 3, 5];
    const type = TYPE.GUESS;

    expect(() => {
      validator(type, input);
    }).not.toThrow();
  });
});
