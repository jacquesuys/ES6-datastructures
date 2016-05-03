class List {
  constructor() {
    this._listSize = 0;
    this._dataStore = [];
  }
  length() {
    return this._dataStore.length;
  }
  append(val) {
    this._dataStore[this._listSize++] = val;
  }
  clear() {
    this._dataStore = [];
  }
  find(val) {
    for (var i = 0; i < this._dataStore.length; i++) {
      if (val === this._dataStore[i]) {
        return i;
      }
    }
    return -1;
  }
  remove(val) {
    let pos = this.find(val);
    if (pos > -1) {
      this._dataStore.splice(pos, 1);
      this._listSize--;
      return true;
    }
    return false;
  }
}

var list = new List();