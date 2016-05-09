class HashTable {
  constructor() {
    this.table = new Array(137);
    this.makeChains();
  }
  makeChains() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = [];
    }
  }
  put(val) {
    let pos = this.hashing(val);
    let index = 0;
    if (this.table[pos][index] === undefined) {
      this.table[pos][index++] = val;
    } else {
      while (this.table[pos][index]) { 
        ++index;
      }
      this.table[pos][index] = val;
    }
  }
  get(val) {
    let pos = this.hashing(val);
    let index = 0;
    if (this.table[pos][index] === val) {
      return this.table[pos][index];
    } else {
      while (this.table[pos][index] !== val && this.table[pos][index] !== undefined) {
        ++index;
      }
      return this.table[pos][index];
    }
    return undefined;
  }
  hashing(str) {
    const H = 37;
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      total += H * total + str.charCodeAt(i);
    }
    total = total % this.table.length; 
    if (total < 0) {
      total += this.table.length - 1;
    }
    return parseInt(total);
  }
  show() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`${i} : ${this.table[i]}`);
      }
    }
  }
}