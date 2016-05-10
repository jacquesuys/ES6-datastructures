class Set {
  constructor() {
    this.dataStore = [];
  }
  add(data) {
    if (!this.contains(data)) {
      this.dataStore.push(data);
      return true;
    }
    return false;
  }
  remove(data) {
    let pos = this.dataStore.indexOf(data);
    if (pos < 0) {
      this.dataStore.slice(pos, 1);
      return true;
    }
    return false;
  }
  show() {
    return this.dataStore;
  }
  contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
      return true;
    }
    return false;
  }
  union(set) {
    let result = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
      result.add(this.dataStore[i]);
    }
    for (let i = 0; i < set.dataStore.length; i++) {
      if (!result.contains(set.dataStore[i])) {
        result.add(set.dataStore[i]);
      }
    }
    return result;
  }
  intersect(set) {
    let result = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
      if (set.contains(this.dataStore[i])) {
        result.add(this.dataStore[i]);
      }
    }
    return result;
  }
  subset(set) {
    if (this.size() > set.size()) {
      return false;
    }
    for (let member in this.dataStore) {
      if(!set.contains(member)) {
        return false;
      }
    }
    return true;
  }
  size() {
    return this.dataStore.length;
  }
}