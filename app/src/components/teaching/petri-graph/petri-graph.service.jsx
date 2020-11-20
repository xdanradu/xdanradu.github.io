class PetriGraphService {
  PN;

  constructor(N, initialMarking) {
    // console.table(N);
    let c = this.getC(N);
    // console.table(c);
    this.PN = { ...N, initialMarking: initialMarking, c: c };
  }

  getC(N) {
    let c = [];
    for (let j = 0; j < N.places.length; j++) {
      let col = [];
      for (let i = 0; i < N.transitions.length; i++) {
        col.push(N.post[j][i] - N.pre[j][i]);
      }
      c.push(col);
    }
    return c;
  }

  get() {
    let markings = [];
    let vertices = [];
    markings.push(this.PN.initialMarking);
    let MAX = 100;
    let i = 0;
    while (this.newItemsExist(markings)) {
      if (i < MAX) {
        i++;
      } else {
        break;
      }
      let markingIndex = this.getIndexOfFirstNewItem(markings);
      let currentMarking = markings[markingIndex];
      let possibleTransitions = this.getPossibleTransitions(currentMarking);

      while (this.newItemsExist(possibleTransitions)) {
        let transitionIndex = this.getIndexOfFirstNewItem(possibleTransitions);

        let nextMarking = this.getNextMarking(
          markings.length,
          possibleTransitions[transitionIndex].transition.id,
          markings[markingIndex]
        );
        if (!this.nextMarkingIsNew(nextMarking, markings)) {
          nextMarking.label = 'old';
          nextMarking.name = this.getNameForExistingMarking(
            nextMarking,
            markings
          );
        } else {
          markings.push(nextMarking);
        }

        possibleTransitions[transitionIndex].label = 'old';
        vertices.push({
          from: currentMarking.name,
          to: nextMarking.name,
          transition: possibleTransitions[transitionIndex].transition.name
        });
      }
      markings[markingIndex].label = 'old';
    }

    return { vertices: vertices, markings: markings };
  }

  newItemsExist(items) {
    let result = false;
    for (let i = 0; i < items.length; i++) {
      if (items[i].label === 'new') {
        result = true;
      }
    }
    return result;
  }

  getIndexOfFirstNewItem(items) {
    let result = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].label === 'new') {
        result = i;
        break;
      }
    }
    return result;
  }

  getPossibleTransitions(marking) {
    let executableTransitions = [];
    for (let j = 0; j < this.PN.transitions.length; j++) {
      let isExecutable = true;
      for (let i = 0; i < this.PN.places.length; i++) {
        if (marking.tokens[i] < this.PN.pre[i][j]) {
          isExecutable = false;
        }
      }
      if (isExecutable) {
        executableTransitions.push({
          transition: this.PN.transitions[j],
          label: 'new'
        });
      }
    }

    return executableTransitions;
  }

  getNextMarking(index, transitionId, marking) {
    let nextMarking = {
      name: 'M' + index,
      tokens: [],
      label: 'new'
    };
    for (let i = 0; i < this.PN.places.length; i++) {
      nextMarking.tokens[i] = marking.tokens[i] + this.PN.c[i][transitionId];
    }
    return nextMarking;
  }

  nextMarkingIsNew(nextMarking, markings) {
    let result = true;
    for (let i = 0; i < markings.length; i++) {
      if (this.markingsAreEqual(nextMarking, markings[i])) {
        result = false;
      }
    }
    return result;
  }

  getNameForExistingMarking(nextMarking, markings) {
    let name = nextMarking.name;
    for (let i = 0; i < markings.length; i++) {
      if (this.markingsAreEqual(nextMarking, markings[i])) {
        name = markings[i].name;
      }
    }
    return name;
  }

  markingsAreEqual(m1, m2) {
    let result = true;
    for (let i = 0; i < m1.tokens.length; i++) {
      if (m1.tokens[i] !== m2.tokens[i]) {
        result = false;
      }
    }
    return result;
  }
}
export default PetriGraphService;
