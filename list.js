class List {
  constructor() {
    this._listSize = 0;
    this._dataStore = [];
  }
  length() {
    return this._dataStore.length;
  }
}

var list = new List();