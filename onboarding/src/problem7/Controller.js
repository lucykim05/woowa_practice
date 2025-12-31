class Controller {
  static getNewFriend(username, friendArr) {
    const firstFriendArr = this.#findFriend(username, friendArr);
    const secondFriendArr = this.#findNewFriend(firstFriendArr, friendArr);
    return secondFriendArr;
  }

  static #findFriend(username, friendArr) {
    let arr = [];
    for (const friend of friendArr) {
      if (friend.includes(username)) {
        const idx = friend.indexOf(username);
        arr.push(friend[1 - idx]);
      }
    }
    return arr;
  }

  static #findNewFriend(friend, friendArr) {
    let arr = [];
    for (const user of friend) {
      for (const f of friendArr) {
        if (f.includes(user)) {
          const idx = f.indexOf(user);
          arr.push(f[1 - idx]);
        }
      }
    }
    return arr;
  }
}

export default Controller;
