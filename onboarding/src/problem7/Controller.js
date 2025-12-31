class Controller {
  constructor(username, friendArr, visitorArr) {
    this.username = username;
    this.friendArr = friendArr;
    this.visitorArr = visitorArr;
    this.firstFriendArr = [];
    this.secondFriendArr = [];
  }

  getNewFriend(username, friendArr) {
    const firstFriendArr = this.#findFriend(username, friendArr);
    const secondFriendArr = this.#findNewFriend(firstFriendArr, friendArr);
    this.saveSecondFriend(secondFriendArr);
    return secondFriendArr;
  }

  #findFriend(username, friendArr) {
    let arr = [];
    for (const friend of friendArr) {
      if (friend.includes(username)) {
        const idx = friend.indexOf(username);
        arr.push(friend[1 - idx]);
      }
    }
    this.saveFirstFriend(arr);
    return arr;
  }

  #findNewFriend(friend, friendArr) {
    let arr = [];
    for (const user of friend) {
      for (const f of friendArr) {
        if (f.includes(user)) {
          const idx = f.indexOf(user);
          const name = f[1 - idx];
          if (!friend.includes(name)) arr.push(f[1 - idx]);
        }
      }
    }

    return arr;
  }

  saveFirstFriend(arr) {
    this.firstFriendArr = arr;
  }

  saveSecondFriend(arr) {
    this.secondFriendArr = arr;
  }

  getFriendArr() {
    return this.friendArr;
  }

  getFirstArr() {
    return this.firstFriendArr;
  }
}

export default Controller;
