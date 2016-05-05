class List {
  constructor() {
    this.pos = 0;
    this.listSize = 0;
    this.dataStore = [];
  }
  length() {
    return this.dataStore.length;
  }
  append(val) {
    this.dataStore[this.listSize++] = val;
  }
  clear() {
    this.dataStore = [];
    this.listSize = 0;
  }
  find(val) {
    for (var i = 0; i < this.dataStore.length; i++) {
      if (val === this.dataStore[i]) {
        return i;
      }
    }
    return -1;
  }
  remove(val) {
    let pos = this.find(val);
    if (pos > -1) {
      this.dataStore.splice(pos, 1);
      this.listSize--;
      return true;
    }
    return false;
  }
  toString() {
    return this.dataStore;
  }
  insert(val, pos) { 
    let insertPos = this.find(pos); 
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, val);
      ++this.listSize;
      return true;
    }
    return false; 
  }
  // traversal
  front() {
    this.pos = 0;
  }
  end() {
    this.pos = this.listSize - 1;
  }
  prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }
  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }
  currPos() {
    return this.pos;
  }
  moveTo(pos) {
    this.pos = pos;
  }
  getElement() {
    return this.dataStore[this.pos];
  }
}