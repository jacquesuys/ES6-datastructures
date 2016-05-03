class List {
  constructor() {
    this._pos = 0;
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
    this._listSize = 0;
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
  toString() {
    return this._dataStore;
  }
  insert(val, pos) { 
    let insertPos = this.find(pos); 
    if (insertPos > -1) {
      this._dataStore.splice(insertPos + 1, 0, val);
      ++this._listSize;
      return true;
    }
    return false; 
  }
  // traversal
  front() {
    this._pos = 0;
  }
  end() {
    this._pos = this._listSize - 1;
  }
  prev() {
    if (this._pos > 0) {
      --this._pos;
    }
  }
  next() {
    if (this._pos < this._listSize - 1) {
      ++this._pos;
    }
  }
  currPos() {
    return this._pos;
  }
  moveTo(pos) {
    this._pos = pos;
  }
  getElement() {
    return this._dataStore[this._pos];
  }
}

var list = new List();