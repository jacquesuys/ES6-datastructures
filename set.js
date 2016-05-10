class Set {
  constructor() {
    this.dataStore = [];
  }
  add(data) {
    if (this.dataStore.indexOf(data) < 0) {
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
}