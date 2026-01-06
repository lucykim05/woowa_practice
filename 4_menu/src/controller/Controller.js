import Parser from '../model/Parser.js';
import { InputValidator } from '../model/Validator.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Coach from '../model/Coach.js';
import CategoryManager from '../model/CategoryManager.js';
import MenuManager from '../model/MenuManager.js';
import fs from 'fs';

class Controller {
  #names;
  #coaches;
  #category;
  #menu;
  // 입력 받아서 코치별로 못 먹는 음식 정리
  // CategoryManager 생성
  // while 문으로 결과 받음
  // 카테고리 별로 shuffle
  // 결과 최종 처리
  constructor() {
    this.#coaches = [];
    this.getMenuInfo();
  }

  async readInput() {
    OutputView.printStart();
    const names = await this.readNames();
    const foodInfo = await this.readFoodInfo(names);
    const organizedInfo = Parser.organizeInfo(names, foodInfo);
    const category = new CategoryManager();
    this.#category = category.getCategory();
    return organizedInfo;
  }

  makeCoach(info) {
    this.#names.forEach((x) => {
      const foodInfo = info.filter((y) => y.name === x);
      this.#coaches.push({
        name: x,
        coach: new Coach(x, foodInfo[0]),
      });
    });
  }

  getMenuInfo() {
    this.#menu = InputView.readMenuInfo();
  }

  makeMenu() {
    const manager = new MenuManager(this.#coaches, this.#names, this.#menu);
    this.#category.forEach((x) => {
      manager.shuffle(x);
    });
  }

  printResult() {
    OutputView.printCategory(this.#category);
    this.#names.forEach((x) => {
      const filtered = this.#coaches.filter((y) => y.name === x);
      const coach = filtered[0].coach;
      OutputView.printMenu(x, coach.getFood());
    });
    OutputView.printEnd();
  }

  async readNames() {
    const namesInput = await InputView.readNames();
    const namesArr = Parser.splitNames(namesInput);
    InputValidator.validateNames(namesArr);
    this.#names = namesArr;
    return namesArr;
  }

  async readFoodInfo(names) {
    const arr = [];
    for (const name of names) {
      const result = await this.checkInfo(name);
      arr.push(result);
    }
    return arr;
  }

  async checkInfo(name) {
    const info = await InputView.readFoodInfo(name);
    const arr = info.split(',').map((x) => x.trim());
    if (arr.length !== 0) {
      InputValidator.validateMenu(arr, this.#menu);
      return arr;
    }
    return null;
  }
}

export default Controller;
