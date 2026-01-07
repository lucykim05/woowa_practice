class Mission {
  constructor(course, level, name, crew) {
    this.course = course;
    this.level = level;
    this.name = name;
    this.crew = crew;
    this.match = [];
  }

  resetMatch() {
    this.match = [];
    this.crew.forEach((x) => x.resetMatch(this.name));
  }

  makeMatch(arr) {
    for (let i = 0; i < arr.length; i += 2) {
      this.match.push([arr[i], arr[i + 1]]);
      this.makePair([arr[i], arr[i + 1]]);
    }
  }

  makePair(arr) {
    const crewA = arr[0];
    const crewB = arr[1];
    crewA.makeMatch(this.name, crewB);
    crewB.makeMatch(this.name, crewA);
  }
}

export default Mission;
