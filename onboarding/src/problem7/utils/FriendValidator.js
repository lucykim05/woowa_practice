import IdValidator from './IdValidator.js';

class FriendValidator {
  static validateFriend(input) {
    this.#checkLength(input);
    input.forEach((x) => this.#checkArr(x));
    return this.#checkDuplicate(input);
  }

  static #checkLength(input) {
    if (input.length < 1 || input.length > 10000)
      throw new Error('[ERROR] 배열은 1 이상 10000 이하로 입력 가능합니다.');
  }

  static #checkArr(input) {
    if (input.length !== 2)
      throw new Error('[ERROR] 각 배열은 2명이 들어가 있어야합니다.');
    input.forEach((x) => IdValidator.validateId(x));
  }

  static #checkDuplicate(input) {
    const arr = input.map((x) => x.sort().join(':'));
    const unique = new Set(arr);
    const uniqueArr = Array.from(unique).map((x) => x.split(':'));
    return uniqueArr;
  }
}

export default FriendValidator;
